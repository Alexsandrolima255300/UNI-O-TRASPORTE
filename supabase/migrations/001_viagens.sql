-- UNIÃO TRANSPORTES — estrutura inicial do módulo de viagens
-- Executar no projeto Supabase após revisar as políticas com a estrutura de Auth existente.

create table if not exists public.routes (
  id uuid primary key default gen_random_uuid(),
  origin text not null,
  destination text not null,
  stops jsonb not null default '[]'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.buses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  model text,
  plate text,
  seat_count integer not null check (seat_count > 0),
  seat_layout jsonb not null default '{}'::jsonb,
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.trips (
  id uuid primary key default gen_random_uuid(),
  route_id uuid not null references public.routes(id),
  bus_id uuid not null references public.buses(id),
  departure_date date not null,
  departure_time time not null,
  arrival_time time,
  price numeric(12,2) not null check (price >= 0),
  status text not null default 'scheduled' check (status in ('scheduled','boarding','in_progress','finished','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.seats (
  id uuid primary key default gen_random_uuid(),
  bus_id uuid not null references public.buses(id) on delete cascade,
  seat_number integer not null,
  seat_type text not null default 'standard',
  active boolean not null default true,
  unique(bus_id, seat_number)
);

create table if not exists public.reservations (
  id uuid primary key default gen_random_uuid(),
  trip_id uuid not null references public.trips(id),
  user_id uuid references auth.users(id),
  seat_id uuid not null references public.seats(id),
  status text not null default 'reserved' check (status in ('reserved','confirmed','expired','cancelled')),
  expires_at timestamptz,
  created_at timestamptz not null default now()
);

create unique index if not exists reservations_active_seat_unique
on public.reservations(trip_id, seat_id)
where status in ('reserved','confirmed');

create table if not exists public.passengers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id),
  full_name text not null,
  cpf text,
  birth_date date,
  phone text,
  email text,
  created_at timestamptz not null default now()
);

create table if not exists public.payments (
  id uuid primary key default gen_random_uuid(),
  reservation_id uuid not null references public.reservations(id),
  amount numeric(12,2) not null check (amount >= 0),
  method text,
  status text not null default 'pending' check (status in ('pending','paid','failed','cancelled','refunded')),
  external_id text,
  created_at timestamptz not null default now()
);

create table if not exists public.tickets (
  id uuid primary key default gen_random_uuid(),
  reservation_id uuid not null references public.reservations(id),
  ticket_code text not null unique,
  qr_code text,
  status text not null default 'valid' check (status in ('valid','used','cancelled')),
  created_at timestamptz not null default now()
);

create table if not exists public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null,
  message text not null,
  read boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.routes enable row level security;
alter table public.buses enable row level security;
alter table public.trips enable row level security;
alter table public.seats enable row level security;
alter table public.reservations enable row level security;
alter table public.passengers enable row level security;
alter table public.payments enable row level security;
alter table public.tickets enable row level security;
alter table public.notifications enable row level security;

-- Policies devem ser adaptadas ao papel de administrador já existente.
-- Não liberar dados administrativos publicamente por padrão.
