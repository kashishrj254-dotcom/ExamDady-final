// FILE: app/language-lab/page.tsx - PRO LEVEL PAISA VASOOL VERSION
'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function LangLabPro(){
  const [isPro,setIsPro]=useState(false)
  const [xp,setXp]=useState(1250)
  const [streak,setStreak]=useState(7)
  const [activeLang,setActiveLang]=useState('English')
  const [showPractice,setShowPractice]=useState(false)
  
  useEffect(()=>{ setIsPro(localStorage.getItem('isProUser')==='true') },[])
  const RAZORPAY_LINK = "https://rzp.io/rzp/OCvHsTL"
  const unlock = ()=>{ localStorage.setItem('isProUser','true'); setIsPro(true); setXp(x=>x+100); alert('🔥 Pro Unlocked! 100 XP Bonus + Ads Removed') }

  const lessons = [
    {id:1, title:'Greetings & Intro', type:'free', xp:20, done:true},
    {id:2, title:'At Airport ✈️ - Voice Chat', type:'pro', xp:50, desc:'AI Immigration Officer se baat karo'},
    {id:3, title:'Job Interview 💼 - Voice Chat', type:'pro', xp:75, desc:'Real HR questions + feedback'},
    {id:4, title:'Cafe Ordering ☕ - Pronunciation', type:'pro', xp:40, desc:'Score 90+ for perfect accent'},
    {id:5, title:'Grammar Fixer - AI Correction', type:'pro', xp:30, desc:'Galti pe instant correction'},
  ]

  return (
    <main style={{minHeight:'100vh', background:'#0f0a1e', color:'#fff', fontFamily:'system-ui'}}>
      {/* PRO HEADER */}
      <header style={{display:'flex', justifyContent:'space-between', padding:'14px 20px', background:'#1a1033', borderBottom:'1px solid #2a1a4a', position:'sticky', top:0, zIndex:10}}>
        <Link href="/" style={{color:'#fff', textDecoration:'none', fontWeight:800}}>ExamDady <span style={{color:'#a78bfa'}}>Lab</span></Link>
        <div style={{display:'flex', gap:12, alignItems:'center'}}>
          <span style={{background:'#222', padding:'4px 10px', borderRadius:20, fontSize:12}}>🔥 {streak} Day Streak</span>
          <span style={{background:'#f59e0b', color:'#000', padding:'4px 10px', borderRadius:20, fontSize:12, fontWeight:700}}>⚡ {xp} XP</span>
          {isPro && <span style={{background:'#10b981', padding:'4px 10px', borderRadius:20, fontSize:12, fontWeight:700}}>Pro 👑</span>}
        </div>
      </header>

      <div style={{padding:20, maxWidth:700, margin:'0 auto'}}>
        {/* LANGUAGE SELECTOR - PRO */}
        <h2 style={{fontSize:22, fontWeight:800}}>Master 8 Languages - Speak Like Native</h2>
        <div style={{display:'grid', gridTemplateColumns
