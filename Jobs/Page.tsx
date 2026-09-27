'use client'
import Link from 'next/link'
import { useState } from 'react'
const JOBS = [
  {title:'UPSC IAS 2026', dept:'UPSC', last:'15 Nov 2026', qual:'Graduate'},
  {title:'SSC CGL 2026', dept:'SSC', last:'20 Oct 2026', qual:'Graduate'},
  {title:'IBPS PO 2026', dept:'Banking', last:'30 Sep 2026', qual:'Graduate'},
  {title:'Railway NTPC', dept:'Railway', last:'10 Dec 2026', qual:'12th'},
  {title:'Delhi Police Constable', dept:'Police', last:'05 Jan 2027', qual:'12th'},
  {title:'UP TGT PGT', dept:'State', last:'12 Nov 2026', qual:'Graduate'},
]
export default function Jobs(){
  const [f,setF]=useState('All')
  const filtered = f==='All'? JOBS : JOBS.filter(j=>j.qual===f)
  return (<main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:20, fontFamily:'system-ui'}}>
    <Link href="/" style={{color:'#888', textDecoration:'none'}}>← Back</Link>
    <h1 style={{fontSize:26, fontWeight:800, marginTop:16}}>Latest Govt Jobs 2026</h1>
    <div style={{display:'flex', gap:8, marginTop:12}}>{['All','10th','12th','Graduate'].map(q=><button key={q} onClick={()=>setF(q)} style={{padding:'6px 12px', borderRadius:20, border: f===q?'2px solid #a78bfa':'1px solid #333', background:'#161616', color:'#fff'}}>{q}</button>)}</div>
    <div style={{display:'grid', gap:12, marginTop:16}}>{filtered.map((j,i)=><div key={i} style={{background:'#161616', border:'1px solid #222', padding:16, borderRadius:14}}>
      <div style={{fontWeight:700}}>{j.title}</div><div style={{fontSize:12, color:'#888', marginTop:4}}>{j.dept} • Last: {j.last} • {j.qual}</div>
      <a href="https://t.me/examdady" target="_blank" style={{display:'inline-block', marginTop:10, background:'#6d28d9', color:'#fff', padding:'8px 14px', borderRadius:8, fontSize:12, textDecoration:'none', fontWeight:700}}>Apply Now</a>
    </div>)}</div>
  </main>)
}
