"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

export default function Login(){
 const router=useRouter(); const [mode,setMode]=useState("login"); const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [name,setName]=useState(""); const [msg,setMsg]=useState(""); const [busy,setBusy]=useState(false);
 async function submit(e){e.preventDefault();setBusy(true);setMsg("");
  if(mode==="signup"){const {data,error}=await supabase.auth.signUp({email,password,options:{data:{full_name:name}}}); if(error)setMsg(error.message); else {setMsg(data.session?"Conta criada.":"Conta criada. Verifique seu e-mail para entrar."); if(data.session)router.push("/conta");}}
  else {const {data,error}=await supabase.auth.signInWithPassword({email,password}); if(error)setMsg(error.message); else {const {data:p}=await supabase.from("profiles").select("role,active").eq("id",data.user.id).maybeSingle(); if(p?.active===false){await supabase.auth.signOut();setMsg("Conta desativada.");} else router.push(p?.role==="admin"?"/admin":"/conta");}}
  setBusy(false);
 }
 return <main className="page-shell"><header className="topbar"><Link className="brand" href="/">UNIÃO<span>TRANSPORTES</span></Link><nav><Link href="/viagens">Viagens</Link><Link href="/">Início</Link></nav></header><section className="account-page"><div className="section-head"><span className="eyebrow">{mode==="login"?"ACESSO":"NOVO PASSAGEIRO"}</span><h1>{mode==="login"?"Entrar na conta":"Criar conta"}</h1><p>{mode==="login"?"Acesse seus bilhetes e reservas.":"Cadastre-se para reservar sua viagem."}</p></div><form className="search-card" onSubmit={submit}>{mode==="signup"&&<label>Nome completo<input value={name} onChange={e=>setName(e.target.value)} required /></label>}<label>E-mail<input type="email" value={email} onChange={e=>setEmail(e.target.value)} required /></label><label>Senha<input type="password" minLength={6} value={password} onChange={e=>setPassword(e.target.value)} required /></label>{msg&&<p className="form-notice">{msg}</p>}<button className="button primary" disabled={busy}>{busy?"Aguarde...":mode==="login"?"Entrar":"Criar conta"}</button><button type="button" className="text-button" onClick={()=>{setMode(mode==="login"?"signup":"login");setMsg("")}}>{mode==="login"?"Ainda não tenho conta":"Já tenho conta"}</button></form></section></main>
}