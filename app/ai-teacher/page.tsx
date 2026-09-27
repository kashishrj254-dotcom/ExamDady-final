'use client'
import {useState} from 'react'
import {generateMockNotes} from '../../lib/aiGenerator'
export default function Page(){const [t,setT]=useState('Photosynthesis'),[o,setO]=useState('Notes...'); return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:24}}><h1>AI Teacher</h1><input value={t} onChange={e=>setT(e.target.value)} style={{background:'#18181b',color:'#fff',padding:10,borderRadius:8}}/><button onClick={()=>setO(generateMockNotes(t,'very-long','Hinglish'))} style={{background:'#6d28d9',color:'#fff',padding:'10px 16px',borderRadius:8,marginLeft:8}}>Teach</button><pre style={{whiteSpace:'pre-wrap',marginTop:20,background:'#0a0a0a',padding:16,borderRadius:12}}>{o}</pre></div>}
