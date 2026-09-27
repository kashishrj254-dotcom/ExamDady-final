// FILE: app/ai-teacher/page.tsx - PRO LEVEL EASY TEACHING
'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

export default function AITeacherPro(){
  const [q,setQ]=useState('')
  const [ans,setAns]=useState('')
  const [mode,setMode]=useState<'Text'|'Voice'>('Text')
  const [isListening,setIsListening]=useState(false)
  const [isSpeaking,setIsSpeaking]=useState(false)
  const recognitionRef = useRef<any>(null)

  // Voice Input Setup
  useEffect(()=>{
    const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition
    if(SpeechRecognition){
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.lang = 'en-IN'
      recognitionRef.current.continuous = false
      recognitionRef.current.onresult = (e:any)=>{ setQ(e.results[0][0].transcript); setIsListening(false) }
      recognitionRef.current.onend = ()=> setIsListening(false)
    }
  },[])

  const startListening = ()=>{
    if(recognitionRef.current){ setIsListening(true); recognitionRef.current.start() }
    else alert('Mic support nahi hai, text likh de bhai')
  }

  const speak = (text:string)=>{
    speechSynthesis.cancel()
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'hi-IN'
    u.rate = 0.9
    u.onstart = ()=> setIsSpeaking(true)
    u.onend = ()=> setIsSpeaking(false)
    speechSynthesis.speak(u)
  }

  const generateAnswer = ()=>{
    if(!q.trim()) return alert('Pehle topic likh ya bol!')

    // Yehi wo EASY TEACHING PROMPT hai jo Gemini me jayega - abhi demo
    const proAnswer = `😊 Arre ${q}? Ye toh bahut easy hai, sun!

**Real-life Story se samjho:**
Socho tum chai bana rahe ho... Jaise chai me patti, cheeni, doodh ka sahi mix hota hai, waise hi ${q} bhi ek mix hai!

**Simple Logic (Topper wala):**
1. **Kya hai?** ${q} ka matlab simple bhasha me - ye ek process hai jo har jagah hota hai.
2. **Kyun hota hai?** Kyuki nature ko balance chahiye. Exam me iska direct question aayega: "Why ${q} occurs?"
3. **Kahan kaam aata hai?** Real life me - tumhare phone se leke UPSC interview tak! Aur exam me - har saal 2 marks pakka!

**Hinglish Trick Yaad Karne Ka:**
"${q} = Kaam + Kaaran + Fayda" Bas ye 3 shabd yaad rakho, poora answer likh doge!

**Quick Revision in 3 Points (Exam ke liye):**
• Point 1: ${q} ka core definition + 1 example
• Point 2: Iska formula / steps - 2 line me
• Point 3: 1 Real-life use + 1 Exam PYQ type

Bata, ab easy laga? 😎
`

    setAns(proAnswer)
    if(mode==='Voice') speak(proAnswer)
  }

  const explainSimpler = ()=>{
    const simpler = `Arey aur simple? Chal sun! ${q} matlab... ekdum bachcho wali bhasha me... Jaise cycle chalana... Pehle mushkil lagta hai, fir easy! Bas yahi hai ${q}.`
    setAns(simpler)
    if(mode==='Voice') speak(simpler)
  }

  return (
    <main style={{minHeight:'100vh', background:'#0a0a0a', color:'#fff', fontFamily:'system-ui'}}>
      <header style={{display:'flex', justifyContent:'space-between', padding:'14px 20px', borderBottom:'1px solid #222', position:'sticky', top:0, background:'#0a0a0a'}}>
        <Link href="/" style={{color:'#888', textDecoration:'none'}}>← Home</Link>
        <div style={{fontWeight:800}}>AI Teacher <span style={{color:'#a78bfa'}}>Pro</span></div>
        <div style={{width:40}}></div>
      </header>

      <div style={{padding:20, maxWidth:700, margin:'0 auto'}}>
        <h1 style={{fontSize:24, fontWeight:800, textAlign:'center'}}>Kya Sikhna Hai Aaj? 🤔</h1>
        <p style={{textAlign:'center', color:'#888', fontSize:13, marginTop:6}}>Hard topic bhi easy lagega - Guarantee!</p>

        <div style={{display:'flex', gap:8, marginTop:16, justifyContent:'center'}}>
          <button onClick={()=>setMode('Text')} style={{padding:'10px 18px', borderRadius:20, background: mode==='Text'?'#6d28d9':'#1a1a1a', color:'#fff', border: mode==='Text'?'2px solid #a78bfa':'1px solid #333', fontWeight:700}}>Text Mode 📝</button>
          <button onClick={()=>setMode('Voice')} style={{padding:'10px 18px', borderRadius:20, background: mode==='Voice'?'#6d28d9':'#1a1a1a', color:'#fff', border: mode==='Voice'?'2px solid #a78bfa':'1px solid #333', fontWeight:700}}>Voice Mode 🎙️ {isSpeaking && '🔊 Speaking...'}</button>
        </div>

        <div style={{marginTop:18, display:'flex', gap:8}}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Ex: Photosynthesis, Constitution, Trigonometry..." style={{flex:1, padding:14, borderRadius:14, background:'#161616', border:'1px solid #333', color:'#fff', fontSize:15}}/>
          <button onClick={startListening} style={{padding:'0 16px', borderRadius:14, background: isListening? '#ef4444' : '#222', border:'1px solid #333', color:'#fff'}}>{isListening? '●' : '🎤'}</button>
        </div>

        <button onClick={generateAnswer} style={{width:'100%', marginTop:12, padding:14, borderRadius:14, background:'linear-gradient(90deg,#6d28d9,#a78bfa)', color:'#fff', border:'none', fontWeight:800, fontSize:16}}>Explain Karo - Easy Banao! ✨</button>

        <div style={{marginTop:16, background:'#161616', border:'1px solid #222', padding:18, borderRadius:16, minHeight:180, whiteSpace:'pre-wrap', lineHeight:1.6, fontSize:14}}>
          {ans || 'Yahan tera easy wala explanation ayega...\n\nJaise hi tu topic dalega, AI topper teacher ban ke samjhayega:\n- Real-life kahani se\n- Hinglish me\n- Emojis ke saath\n- End me 3 points revision'}
        </div>

        {ans && (
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:8, marginTop:12}}>
            <button onClick={explainSimpler} style={{padding:10, background:'#1a1a1a', border:'1px solid #333', color:'#fff', borderRadius:10, fontSize:11, fontWeight:600}}>🔄 Aur Simple Banao</button>
            <button onClick={()=>setAns(a=>a + '\n\nReal-life Example: Jaise tum Instagram chalate ho, waise hi ye bhi algorithm hai!')} style={{padding:10, background:'#1a1a1a', border:'1px solid #333', color:'#fff', borderRadius:10, fontSize:11, fontWeight:600}}>🌍 Real-life Example</button>
            <button onClick={()=>alert('Test Mode: 5 MCQs ban rahe hain '+q+' pe...')} style={{padding:10, background:'#1a1a1a', border:'1px solid #333', color:'#fff', borderRadius:10, fontSize:11, fontWeight:600}}>📝 Mera Test Lo</button>
          </div>
        )}

        {ans && mode==='Voice' && (
          <div style={{marginTop:12, display:'flex', gap:8}}>
            <button onClick={()=>speak(ans)} style={{flex:1, padding:10, background:'#222', color:'#fff', borderRadius:10, border:'none'}}>🔊 Phir Se Sunao</button>
            <button onClick={()=>speechSynthesis.cancel()} style={{flex:1, padding:10, background:'#333', color:'#fff', borderRadius:10, border:'none'}}>⏹️ Stop</button>
          </div>
        )}

        <div style={{marginTop:14, fontSize:11, color:'#666', textAlign:'center'}}>Teaching Style: Friendly Topper • Hinglish Mix • Emojis • Real-life + Exam Use • 3 Point Revision</div>
      </div>
    </main>
  )
}
