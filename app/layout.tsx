export const metadata = { title: 'ExamDady Pro', description: 'One Search for Nursery to UPSC' }
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body style={{margin:0, background:'#000', color:'#fff', fontFamily:'Inter,sans-serif'}}>{children}</body></html>
}
