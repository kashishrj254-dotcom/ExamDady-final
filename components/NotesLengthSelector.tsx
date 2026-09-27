'use client'
import {useState} from 'react'
const L=[{id:'very-short',l:'Very Short',d:'300w'},{id:'short',l:'Short',d:'600w'},{id:'medium',l:'Medium',d:'1000w'},{id:'long',l:'Long',d:'1800w'},{id:'very-long',l:'Very Long',d:'3000+ words'}]
export default function NotesLengthSelector({onChange}:{onChange:(id:string)=>void}){
  const [sel,setSel]=useState('medium')
  return <div><p style={{fontSize:14, fontWeight:700}}>Choose Notes Length</p><div style={{display:'flex', gap:8, overflow:'auto', padding:'8px 0'}}>{L.map(x=><button key={x.id} onClick={()=>{setSel(x.id); onChange(x.id)}} style={{minWidth:120, padding:'10px 14px', borderRadius:12, background: sel===x.id?'#6d28d9':'#18181b', border:'1px solid #27272a', color:'#fff'}}><div style={{fontSize:12, fontWeight:700}}>{x.l}</div><div style={{fontSize:10, opacity:0.7}}>{x.d}</div></button>)}</div></div>
}
