'use client'
import { useState } from 'react'
import Link from 'next/link'

const cards = [
  { title: 'Exams', desc: 'All govt & entrance exams', href: '/exams', color: '#6d28d9' },
  { title: 'PYQ Papers', desc: 'Previous year solved', href: '/pyq', color: '#0ea5e9' },
  { title: 'Mock Test', desc: 'Practice like real exam', href: '/mock-test', color: '#10b981' },
  { title: 'College Finder', desc: 'Find best colleges', href: '/college', color: '#f59e0b' },
  { title: 'Library', desc: 'Notes & Books', href: '/library', color: '#ef4444' },
  { title: 'AI Teacher', desc: 'Ask any doubt', href: '/ai-teacher', color: '#8b5cf6' },
  { title: 'Jobs', desc: 'Latest sarkari jobs', href: '/jobs', color: '#06b6d4' },
  { title: 'Interview', desc: 'Interview prep', href: '/interview', color: '#ec4899' },
]

export default function Home(){
  const [q,setQ] = useState('')
  return (
    <main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'system-ui'}}>
      <div style={{maxWidth:1000, margin:'0 auto', padding:'20px'}}>
        <h1 style={{fontSize:32, fontWeight:800, textAlign:'center', marginTop:20}}>ExamDady Pro 🎓</h1>
        <p style={{textAlign:'center', opacity:0.7, marginTop:8}}>One Search for Nursery to UPSC</p>
        
        <div style={{margin:'30px 0', display:'flex', gap:10}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search exam, subject, college..." style={{flex:1, padding:'14px 16px', borderRadius:12, border:'1px solid #333', background:'#1a1a1a', color:'#fff', outline:'none'}}/>
          <Link href={`/exams?q=${q}`} style={{background:'#6d28d9', padding:'14px 20px', borderRadius:12, textDecoration:'none', color:'#fff', fontWeight:600}}>Search</Link>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:14}}>
          {cards.map(c=>(
            <Link key={c.title} href={c.href} style={{background:'#161616', border:'1px solid #222', padding:18, borderRadius:16, textDecoration:'none'}}>
              <div style={{width:36, height:36, borderRadius:10, background:c.color, marginBottom:10}}></div>
              <div style={{color:'#fff', fontWeight:700}}>{c.title}</div>
              <div style={{color:'#888', fontSize:13, marginTop:4}}>{c.desc}</div>
            </Link>
          ))}
        </div>
        <p style={{textAlign:'center', marginTop:30, opacity:0.4, fontSize:12}}>© 2025 ExamDady - Made for Students</p>
      </div>
    </main>
  )
}
