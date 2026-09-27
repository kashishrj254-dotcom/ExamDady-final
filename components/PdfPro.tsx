'use client'
import {useState} from 'react'
export default function PdfPro({content, title}: any){
  const download = async () => {
    const { jsPDF } = await import('jspdf') as any
    const doc = new jsPDF();
    doc.text(title || 'ExamDady', 10, 10);
    doc.text(content?.substring(0,1000) || 'notes', 10, 20);
    doc.save(`${title}.pdf`)
  }
  return <button onClick={download} style={{background:'#6d28d9',color:'#fff',padding:'8px 12px',borderRadius:8}}>Download PDF</button>
}
