'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Home() {
  const [topic, setTopic] = useState('')
  const [length, setLength] = useState('Medium')
  const [lang, setLang] = useState('English')
  const [count, setCount] = useState(4293)

  useEffect(()=>{
    const c = localStorage.getItem('notesCount')
    if(c) setCount(parseInt(c))
    else localStorage.setItem('notesCount','4293')
  },[])

  const lengths = [
    {id:'Very Short', label:'Very Short (300w, 1 Page)', sub:'Quick Revision'},
    {id:'Short', label:'Short (600w, 2 Pages)', sub:''},
    {id:'Medium', label:'Medium (1000w, 3-4 Pages)', sub:'Default', default:true},
    {id:'Long', label:'Long (1800w, 6-7 Pages)', sub:''},
    {id:'Very Long', label:'Very Long (3000+ w, 10+ Pages)', sub:'Book Type'},
  ]

  return (
    <main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'16px 20px', borderBottom:'1px solid #222', position:'sticky', top:0, background:'#0a0a0a', zIndex:10}}>
        <div style={{fontWeight:800, fontSize:20}}>ExamDady <span style={{color:'#a78bfa'}}>Pro</span> {typeof window !== 'undefined' && localStorage.getItem('isProUser')=='true' && '👑'}</div>
        <div style={{display:'flex', gap:12, fontSize:12, overflowX:'auto'}}>
          <Link href="/ai-teacher" style={{color:'#fff', textDecoration:'none'}}>AI Teacher</Link>
          <Link href="/mock-test" style={{color:'#fff', textDecoration:'none'}}>Mock Test</Link>
          <Link href="/pyq" style={{color:'#fff', textDecoration:'none'}}>PYQ Papers</Link>
          <Link href="/interview" style={{color:'#fff', textDecoration:'none'}}>Interview</Link>
          <Link href="/language-lab" style={{color:'#fff', textDecoration:'none'}}>Language Lab</Link>
          <Link href="/jobs" style={{color:'#fff', textDecoration:'none'}}>Jobs</Link>
        </div>
      </header>

      <div style={{padding:20, maxWidth:700, margin:'0 auto'}}>
        <h1 style={{fontSize:28, fontWeight:800, textAlign:'center', marginTop:20}}>One Search - Nursery to UPSC</h1>
        
        <input value={topic} onChange={e=>setTopic(e.target.value)} placeholder="Ex: Photosynthesis, Indian Constitution..." style={{width:'100%', marginTop:20, padding:16, borderRadius:14, border:'1px solid #333', background:'#161616', color:'#fff', fontSize:16}}/>

        <div style={{marginTop:20}}>
          <div style={{fontSize:13, color:'#888', marginBottom:8}}>Choose Notes Length:</div>
          <div style={{display:'flex', gap:8, overflowX:'auto', paddingBottom:8}}>
            {lengths.map(l=>(
              <button key={l.id} onClick={()=>setLength(l.id)} style={{whiteSpace:'nowrap', padding:'10px 14px', borderRadius:20, border: length===l.id ? '2px solid #a78bfa' : '1px solid #333', background: length===l.id ? '#1f1033' : '#161616', color:'#fff', fontSize:12, fontWeight: length===l.id ? 700 : 400}}>
                {l.label} {l.sub && ` - ${l.sub}`}
              </button>
            ))}
          </div>
        </div>

        <div style={{marginTop:16, display:'flex', gap:10}}>
          <select value={lang} onChange={e=>setLang(e.target.value)} style={{flex:1, padding:12, borderRadius:12, background:'#161616', color:'#fff', border:'1px solid #333'}}>
            <option>English</option><option>Hindi</option><option>Hinglish</option><option>Tamil</option><option>Telugu</option><option>Marathi</option>
          </select>
          <button style={{flex:2, padding:12, borderRadius:12, background:'#6d28d9', color:'#fff', border:'none', fontWeight:700}}>Generate Notes in {length} ({lang})</button>
        </div>

        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, marginTop:24}}>
          <Link href="/library" style={{background:'#161616', border:'1px solid #222', padding:14, borderRadius:14, textAlign:'center', textDecoration:'none', color:'#fff'}}>
            <div style={{fontSize:20, fontWeight:800}}>{count}</div><div style={{fontSize:11, color:'#888'}}>Notes Generated</div>
          </Link>
          <Link href="/mock-test" style={{background:'#161616', border:'1px solid #222', padding:14, borderRadius:14, textAlign:'center', textDecoration:'none', color:'#fff'}}>
            <div style={{fontSize:20, fontWeight:800}}>{count}</div><div style={{fontSize:11, color:'#888'}}>Mock Papers</div>
          </Link>
          <Link href="/downloads" style={{background:'#161616', border:'1px solid #222', padding:14, borderRadius:14, textAlign:'center', textDecoration:'none', color:'#fff'}}>
            <div style={{fontSize:20, fontWeight:800}}>{count}</div><div style={{fontSize:11, color:'#888'}}>PDFs Downloaded</div>
          </Link>
        </div>

        <div style={{marginTop:10, fontSize:11, color:'#666', textAlign:'center'}}>Selected: {length} words • Language: {lang} • Header: ExamDady - Pro Notes • Footer: Page Numbers • Bullet: • (UTF-8 fixed)</div>
      </div>
    </main>
  )
}
