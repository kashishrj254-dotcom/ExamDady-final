'use client'
import {useState} from 'react'
const ACTIONS=[{i:'📝',l:'Generate Detailed Notes',a:'notes'},{i:'📄',l:'Download as PDF',a:'pdf'},{i:'🖼️',l:'Generate Diagram',a:'diagram'},{i:'⭐',l:'Important Questions',a:'imp'},{i:'📚',l:'PYQ with Solution',a:'pyq'},{i:'📌',l:'Sticky Notes',a:'sticky'},{i:'🧠',l:'Take Mock Test',a:'mock'}]
export default function SmartUniversalSearch({onSelect}:{onSelect:(t:string,ac:string)=>void}){
  const [q,setQ]=useState(''),[show,setShow]=useState(false)
  return <div style={{position:'relative', maxWidth:720, margin:'0 auto'}}>
    <div style={{display:'flex', gap:10, background:'#18181b', border:'1px solid #27272a', borderRadius:16, padding:'14px 18px'}}>
      <input value={q} onChange={e=>{setQ(e.target.value); setShow(e.target.value.length>=3)}} placeholder="Enter ANY topic..." style={{flex:1, background:'transparent', border:0, outline:'none', color:'#fff'}}/>
    </div>
    {show && <div style={{position:'absolute', zIndex:50, marginTop:12, width:'100%', background:'#18181b', border:'1px solid #27272a', borderRadius:16, padding:16}}>
      <p style={{fontSize:13, color:'#a1a1aa'}}>For <b style={{color:'#fff'}}>'{q}'</b></p>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:12}}>
        {ACTIONS.map(x=><button key={x.a} onClick={()=>{onSelect(q,x.a); setShow(false)}} style={{textAlign:'left', padding:12, background:'#27272a', borderRadius:12, color:'#fff', border:0}}>{x.i} {x.l}</button>)}
      </div>
    </div>}
  </div>
}
