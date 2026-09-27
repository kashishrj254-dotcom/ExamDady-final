'use client'
import {useState} from 'react'
export default function Page(){const [lang,setLang]=useState('English'); return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:24}}><h1>Language Lab - {lang}</h1><select value={lang} onChange={e=>setLang(e.target.value)} style={{background:'#18181b',color:'#fff',padding:10,borderRadius:8,marginTop:12}}><option>English</option><option>Hindi</option><option>Hinglish</option></select></div>}
