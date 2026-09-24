"use client";
import { useState } from "react";
import Link from "next/link";

export default function Viagens() {
  const [origin,setOrigin]=useState("");
  const [destination,setDestination]=useState("");
  const [date,setDate]=useState("");
  const [passengers,setPassengers]=useState("1");
  const [notice,setNotice]=useState("");

  function search(e){
    e.preventDefault();
    if(!origin || !destination || !date){ setNotice("Preencha origem, destino e data."); return; }
    window.location.href="/viagens/resultados";
  }

  return <main className="page-shell">
    <header className="topbar"><Link className="brand" href="/">UNIÃO<span>TRANSPORTES</span></Link><nav><Link href="/viagens">Viagens</Link><Link href="/conta">Minha conta</Link><Link href="/admin">Administração</Link></nav></header>
    <section className="search-page">
      <div className="section-head reveal"><span className="eyebrow">PLANEJE SUA VIAGEM</span><h1>Para onde você quer ir?</h1><p>Informe os dados da viagem para consultar as opções disponíveis no sistema.</p></div>
      <form className="search-card reveal delay-1" onSubmit={search}>
        <label>De<input value={origin} onChange={e=>setOrigin(e.target.value)} placeholder="Cidade de origem"/></label>
        <label>Para<input value={destination} onChange={e=>setDestination(e.target.value)} placeholder="Cidade de destino"/></label>
        <label>Data<input type="date" value={date} onChange={e=>setDate(e.target.value)}/></label>
        <label>Passageiros<select value={passengers} onChange={e=>setPassengers(e.target.value)}><option>1</option><option>2</option><option>3</option><option>4</option></select></label>
        <button className="button primary" type="submit">Buscar viagens <span>→</span></button>
        {notice && <p className="form-notice">{notice}</p>}
      </form>
      <div className="empty-info reveal delay-2"><strong>Integração pronta para dados reais</strong><span>Os resultados devem vir do Supabase quando rotas e viagens forem cadastradas. Esta interface não inventa disponibilidade.</span></div>
    </section>
  </main>;
}
