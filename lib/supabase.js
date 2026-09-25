import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://rejyergahvzabyerhjhy.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "sb_publishable_A5oVTI7f-c-M1260_Mq1qA_Y2s0J6E8";
export const supabase = createClient(url, key);
