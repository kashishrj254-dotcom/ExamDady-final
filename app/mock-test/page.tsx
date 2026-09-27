// FILE: app/mock-test/page.tsx - PRO EXAM HALL + AI ANALYSIS
'use client'
import Link from 'next/link'
import { useState } from 'react'
export default function MockPro(){
  const [started,setStarted]=useState(false)
  const [score,setScore]=useState(0)
  const [done,setDone]=useState(false)
  return (<main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', padding:20}}>
    <Link href="/" style={{color:'#888', textDecoration:'none'}}>← Home</Link>
    <h1 style={{fontSize:24, fontWeight:800, marginTop:12}}>Mock Test Pro - Real Exam Hall</h1>
    {!started? <div style={{marginTop:14}}><input placeholder="Topic: Ex: Indian Constitution" style={{width:'100%', padding:14, borderRadius:12, background:'#161616', border:'1px solid #333', color:'#fff'}}/><button onClick={()=>setStarted(true)} style={{width:'100%', marginTop:10, padding:12, background:'#6d28d9', borderRadius:12, border:'none', color:'#fff', fontWeight:700}}>Generate 10 MCQs + Timer + Negative Marking</button><div style={{marginTop:10, fontSize:11, color:'#888'}}>Pro Features: Mark for Review, Timer 15 min, Leaderboard, AI Weak Topic Analysis</div></div> : !done? <div style={{marginTop:16, background:'#161616', padding:16, borderRadius:14}}><div style={{display:'flex', justifyContent:'space-between', fontSize:12}}><span>Q 1/10</span><span style={{color:'#ef4444'}}>⏱️ 14:21</span><span>🔖 Mark</span></div><div style={{marginTop:12, fontWeight:700}}>What is Article 32?</div><div style={{display:'grid', gap:8, marginTop:10}}>{['Right to Equality','Right to Constitutional Remedies - Heart of Constitution','Right to Freedom','Right to Property'].map((o,i)=><button key={i} onClick={()=>{if(i===1) setScore(s=>s+1)}} style={{textAlign:'left', padding:12, background:'#222', border:'1px solid #333', borderRadius:10, color:'#fff'}}>{o}</button>)}</div><button onClick={()=>setDone(true)} style={{width:'100%', marginTop:12, padding:12, background:'#fff', color:'#000', borderRadius:10, fontWeight:700}}>Submit - Get AI Analysis</button></div> : <div style={{marginTop:16, background:'#111', padding:16, borderRadius:14}}><div style={{fontSize:20, fontWeight:800}}>Score: {score}/10 - AI Analysis</div><div style={{marginTop:8, background:'#1a1033', padding:10, borderRadius:10, fontSize:12}}>🔍 Weak Topic: Article 32 - Tumhe Constitution pe aur padhna chahiye. AI Teacher se 5 min me samjho!</div><div style={{marginTop:8, background:'#052e16', padding:10, borderRadius:10, fontSize:12}}>🏆 Leaderboard: Top 12% - Share karo dosto ke saath!</div><button onClick={()=>{setDone(false); setStarted(false)}} style={{width:'100%', marginTop:10, padding:10, background:'#6d28d9', color:'#fff', borderRadius:10, border:'none'}}>Retry + Improve</button></div>}
  </main>)
}
