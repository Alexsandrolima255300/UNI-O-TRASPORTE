"use client";
import { useState } from "react";
import Link from "next/link";

export default function Assentos(){
 const [selected,setSelected]=useState(null);
 const seats=Array.from({length:40},(_,i)=>i+1);
 return <main className="page-shell"><header className="topbar"><Link className="brand" href="/">UNIÃO<span>TRANSPORTES</span></Link><nav><Link href="/viagens">Voltar</Link><Link href="/conta">Minha conta</Link></nav></header>
 <section className="seat-page"><div className="section-head"><span className="eyebrow">ESCOLHA SEU LUGAR</span><h1>Mapa de assentos</h1><p>Selecione um assento disponível. A confirmação definitiva deve ser feita no servidor.</p></div>
 <div className="seat-layout"><div className="seat-bus"><div className="driver">FRENTE · MOTORISTA</div><div className="seat-grid">{seats.map(n=><button key={n} className={selected===n?"seat selected":"seat"} onClick={()=>setSelected(n)} aria-label={"Assento "+n}>{String(n).padStart(2,"0")}</button>)}</div><div className="legend"><span><i className="available"/>Disponível</span><span><i className="chosen"/>Selecionado</span><span><i className="occupied"/>Ocupado</span></div></div>
 <aside className="booking-card"><span className="eyebrow">RESUMO</span><h2>Uberaba → Belo Horizonte</h2><p>Assento selecionado: <strong>{selected?String(selected).padStart(2,"0"):"—"}</strong></p><button className="button primary" disabled={!selected}>Continuar</button><small>Em produção, a reserva temporária e a expiração serão controladas pelo Supabase.</small></aside></div>
 </section></main>
}
