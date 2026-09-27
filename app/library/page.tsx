'use client'
import {useEffect,useState} from 'react'
export default function Page(){const [s,setS]=useState({notes:4293}); useEffect(()=>{const d=localStorage.getItem('examdady_stats'); if(d) setS(JSON.parse(d))},[]); return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:24}}><h1>Library - Notes: {s.notes}</h1></div>}
