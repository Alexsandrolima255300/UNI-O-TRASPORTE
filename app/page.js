import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <Link className="brand" href="/">UNIÃO<span>TRANSPORTES</span></Link>
        <nav>
          <Link href="/viagens">Viagens</Link>
          <Link href="/conta">Minha conta</Link>
          <Link href="/admin">Administração</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy reveal">
          <span className="eyebrow">VIAGENS UNIÃO</span>
          <h1>Seu próximo destino começa <em>aqui.</em></h1>
          <p>Pesquise viagens, escolha seu assento e acompanhe seus bilhetes em uma experiência simples e moderna.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/viagens">Buscar viagens</Link>
            <Link className="button ghost" href="/conta">Minha conta</Link>
          </div>
        </div>
        <div className="route-visual reveal delay-1">
          <div className="route-line"><i></i><span></span><b></b></div>
          <div className="route-labels"><strong>UBERABA</strong><strong>BELO HORIZONTE</strong></div>
          <div className="bus-card">
            <span>PRÓXIMA ETAPA</span>
            <strong>Conectando pessoas e destinos</strong>
            <small>Busca • Assentos • Bilhete digital</small>
          </div>
        </div>
      </section>

      <section className="feature-grid">
        {[
          ["01","Busca rápida","Origem, destino, data e passageiros."],
          ["02","Assento","Visualize e selecione seu lugar."],
          ["03","Bilhete digital","Tenha seus dados da viagem sempre à mão."],
          ["04","Experiência móvel","Interface preparada para celular."]
        ].map(([n,t,d]) => <article className="feature reveal" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
      </section>

      <footer>UNIÃO TRANSPORTES · Módulo de viagens</footer>
    </main>
  );
}
