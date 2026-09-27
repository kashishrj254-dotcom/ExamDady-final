// FILE: app/jobs/page.tsx - PRO AI JOB MATCHER
'use client'
import Link from 'next/link'
import { useState } from 'react'
const JOBS = [
  {title:'UPSC IAS 2026', dept:'UPSC', last:'15 Nov 2026', qual:'Graduate', match:92, tip:'Resume me Leadership + Current Affairs likh'},
  {title:'SSC CGL 2026', dept:'SSC', last:'20 Oct 2026', qual:'Graduate', match:88, tip:'Maths + English pe focus'},
  {title:'IBPS PO 2026', dept:'Banking', last:'30 Sep 2026', qual:'Graduate', match:85, tip:'Banking awareness + Mock test'},
]
export default function JobsPro(){
  const [qual,setQual]=useState('Graduate')
  return (<main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:20}}>
    <Link href="/" style={{color:'#888', textDecoration:'none'}}>← Home</Link>
    <h1 style={{fontSize:26, fontWeight:800, marginTop:12}}>Jobs - AI Matcher Pro</h1>
    <div style={{marginTop:10, background:'#1a1033', padding:12, borderRadius:12, fontSize:12}}>Tumhari Qualification: <select value={qual} onChange={e=>setQual(e.target.value)} style={{background:'#222', color:'#fff', border:'1px solid #333', borderRadius:8, padding:'4px 8px'}}><option>10th</option><option>12th</option><option>Graduate</option></select> • AI batayega tum kitne % eligible ho</div>
    <div style={{display:'grid', gap:12, marginTop:14}}>{JOBS.filter(j=>j.qual===qual).map((j,i)=><div key={i} style={{background:'#161616', border:'1px solid #2a1a4a', padding:14, borderRadius:14}}>
      <div style={{display:'flex', justifyContent:'space-between'}}><b>{j.title}</b><span style={{background: j.match>85? '#10b981' : '#f59e0b', color:'#000', padding:'2px 8px', borderRadius:10, fontSize:11, fontWeight:700}}>{j.match}% Match</span></div>
      <div style={{fontSize:12, color:'#888', marginTop:4}}>{j.dept} • Last: {j.last} • {j.qual}</div>
      <div style={{marginTop:8, background:'#0f0a1e', padding:8, borderRadius:8, fontSize:11}}>💡 AI Resume Tip: {j.tip}</div>
      <a href="https://t.me/examdady" target="_blank" style={{display:'block', marginTop:10, background:'#6d28d9', color:'#fff', padding:'10px', borderRadius:10, textAlign:'center', fontWeight:700, textDecoration:'none'}}>Apply + Get Prep Material</a>
    </div>)}</div>
  </main>)
}
