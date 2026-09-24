"use client";
import Link from "next/link";
import { useState } from "react";

const demo=[{id:1,time:"08:00",arrival:"12:30",duration:"4h30",type:"Executivo",price:"R$ 89,90"},{id:2,time:"14:20",arrival:"18:55",duration:"4h35",type:"Executivo",price:"R$ 94,90"}];

export default function Resultados(){
 const [demoMode,setDemoMode]=useState(false);
 return <main className="page-shell"><header className="topbar"><Link className="brand" href="/">UNIÃO<span>TRANSPORTES</span></Link><nav><Link href="/viagens">Nova busca</Link><Link href="/conta">Minha conta</Link><Link href="/admin">Administração</Link></nav></header>
 <section className="results-page"><div className="section-head"><span className="eyebrow">RESULTADOS</span><h1>Opções de viagem</h1><p>Estrutura pronta para receber viagens cadastradas no banco de dados.</p></div>
 <div className="data-banner"><span>●</span><div><strong>Modo de demonstração visual</strong><small>Os cartões abaixo são apenas exemplos de interface. Não representam horários, preços ou disponibilidade reais.</small></div><button onClick={()=>setDemoMode(!demoMode)}>{demoMode?"Ocultar":"Visualizar exemplos"}</button></div>
 {demoMode && <div className="trip-list">{demo.map(t=><article className="trip-card" key={t.id}><div className="trip-time"><strong>{t.time}</strong><span>Uberaba</span></div><div className="trip-track"><i></i><span>{t.duration}</span><i></i></div><div className="trip-time"><strong>{t.arrival}</strong><span>Belo Horizonte</span></div><div className="trip-meta"><span>{t.type}</span><strong>{t.price}</strong><Link className="button primary small" href="/viagens/assentos">Escolher viagem</Link></div></article>)}</div>}
 </section></main>
}
