'use client'
import {useState} from 'react'
export default function PdfPro({content, title, length}:{content:string,title:string,length:string}){
  const [lang,setLang]=useState('Hinglish')
  const download=async()=>{
    const {jsPDF}=await import('jspdf')
    const doc=new jsPDF(); let y=28
    const header=()=>{doc.setFillColor(109,40,217); doc.rect(0,0,210,14,'F'); doc.setTextColor(255,255,255); doc.setFontSize(9); doc.setFont('helvetica','bold'); doc.text(`ExamDady Pro | ${title} | ${length} | ${lang} | examdady.in`,12,9); doc.setTextColor(0,0,0)}
    header(); doc.setFontSize(22); doc.setFont('helvetica','bold'); doc.text(title.substring(0,55),14,y); y+=8
    doc.setFontSize(10); doc.setTextColor(100,100,100); doc.text(`Generated: ${new Date().toLocaleDateString()} | ${lang} | ${length}`,14,y); y+=10; doc.setTextColor(0,0,0)
    const lines=doc.splitTextToSize(content,182); doc.setFontSize(11); doc.setFont('helvetica','normal')
    lines.forEach((l:string)=>{if(y>275){doc.addPage(); y=22; header()} doc.text(l,14,y); y+=6})
    const pages=doc.getNumberOfPages(); for(let i=1;i<=pages;i++){doc.setPage(i); doc.setFontSize(8); doc.setTextColor(120,120,120); doc.text(`Page ${i} of ${pages} | ExamDady.in | ${lang} | Pro Notes`,14,288)}
    doc.save(`${title}_${lang}_ExamDady_Pro.pdf`)
  }
  return <div style={{display:'flex', gap:8}}><select value={lang} onChange={e=>setLang(e.target.value)} style={{background:'#18181b', color:'#fff', border:'1px solid #27272a', borderRadius:8, padding:'8px'}}><option>English</option><option>Hindi</option><option>Hinglish</option></select><button onClick={download} style={{background:'#6d28d9', color:'#fff', padding:'10px 18px', borderRadius:8, border:0, fontWeight:700}}>Download Pro PDF</button></div>
}
