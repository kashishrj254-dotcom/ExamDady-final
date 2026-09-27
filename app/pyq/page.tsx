// FILE: app/pyq/page.tsx - PRO AI SOLUTION NO NEED SEARCH ELSEWHERE
'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function PYQPro(){
  const [showSol,setShowSol]=useState(false)
  return (<main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:20}}>
    <Link href="/" style={{color:'#888', textDecoration:'none'}}>← Home</Link>
    <h1 style={{fontSize:24, fontWeight:800, marginTop:12}}>PYQ Pro - Solution + Trick + Notes</h1>
    <div style={{marginTop:14, background:'#161616', padding:14, borderRadius:14, border:'1px solid #222'}}><b>UPSC 2024 Q1: What is Article 32?</b><div style={{marginTop:10, display:'flex', gap:8}}><button onClick={()=>setShowSol(!showSol)} style={{flex:1, padding:10, background:'#10b981', color:'#fff', borderRadius:10, border:'none', fontWeight:700}}>{showSol? 'Hide' : 'View AI Solution'} 🤖</button><button style={{flex:1, padding:10, background:'#222', color:'#fff', borderRadius:10, border:'none'}}>Take as Mock</button></div>{showSol && <div style={{marginTop:10, background:'#0f0a1e', padding:12, borderRadius:10, fontSize:13, border:'1px solid #6d28d9', whiteSpace:'pre-wrap'}}><b>Detailed Solution:</b> Article 32 = Right to Constitutional Remedies, Dr. Ambedkar called it heart & soul...\n\n<b>Trick:</b> 32 = 3+2=5 writs yaad rakho (Habeas, Mandamus...)\n\n<b>Related Notes + Video:</b> AI Teacher me iska 2 min explanation hai - click karo, kahin aur search karne ki zarurat nahi!\n\n<b>PYQ Pattern:</b> Har saal 1 Q pakka is topic se.</div>}<div style={{marginTop:10, display:'flex', gap:8}}><button style={{flex:1, padding:8, background:'#222', color:'#fff', borderRadius:8, border:'none', fontSize:11}}>Download PDF</button><button style={{flex:1, padding:8, background:'#222', color:'#fff', borderRadius:8, border:'none', fontSize:11}}>Download with Solution</button></div></div>
  </main>)
}
