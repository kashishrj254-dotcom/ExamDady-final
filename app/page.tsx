'use client'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import SmartUniversalSearch from '../components/SmartUniversalSearch'
import NotesLengthSelector from '../components/NotesLengthSelector'
import PdfPro from '../components/PdfPro'
import {generateMockNotes} from '../lib/aiGenerator'
export default function Home(){
  const [len,setLen]=useState('medium'), [topic,setTopic]=useState('Indian Constitution'), [notes,setNotes]=useState('')
  useEffect(()=>{setNotes(generateMockNotes('Indian Constitution','medium','Hinglish'))},[])
  const handleSelect=(t:string)=>{setTopic(t); setNotes(generateMockNotes(t,len,'Hinglish'))}
  return <div style={{minHeight:'100vh', background:'#000', color:'#fff'}}><header style={{display:'flex', justifyContent:'space-between', padding:16, borderBottom:'1px solid #18181b', fontSize:12}}><b>ExamDady Pro</b><nav style={{display:'flex', gap:12}}><Link href="/ai-teacher">AI</Link><Link href="/mock-test">Mock</Link><Link href="/jobs">Jobs</Link></nav></header><main style={{padding:24, textAlign:'center'}}><h1 style={{fontSize:32, fontWeight:800}}>One Search for Nursery to UPSC</h1><div style={{marginTop:24}}><SmartUniversalSearch onSelect={handleSelect}/></div><div style={{marginTop:16, maxWidth:720, margin:'16px auto'}}><NotesLengthSelector onChange={setLen}/></div><div style={{maxWidth:720, margin:'30px auto', background:'#0a0a0a', border:'1px solid #27272a', borderRadius:16, padding:20, textAlign:'left'}}><div style={{display:'flex', justifyContent:'space-between'}}><h3>{topic}</h3><PdfPro content={notes} title={topic} length={len}/></div><pre style={{whiteSpace:'pre-wrap', fontSize:13, color:'#d4d4d8'}}>{notes}</pre></div></main></div>
}
