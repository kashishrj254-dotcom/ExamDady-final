export const lengthMap:any = {'very-short':300,'short':600,'medium':1000,'long':1800,'very-long':3000}
export function generateMockNotes(topic:string, len:string, lang:string){
  const words = lengthMap[len] || 1000
  return `# ${topic} - ${lang} - ${len} (${words} words)

**Real Life Example:** Socho ${topic} ek chai ki dukaan jaisa hai...

- Definition: ${topic} ka matlab hai...
- Why Important: Exam me 10 marks ka aata hai
- Concept 1: Simple logic se samjho...
- Concept 2: PYQ 2022 me pucha tha...

**Quick Revision:**
1. ${topic} = basic funda
2. Example ke saath likhna
3. PYQ repeat hota hai`
}
