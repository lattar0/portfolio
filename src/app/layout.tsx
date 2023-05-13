import './globals.css'
import { IBM_Plex_Mono } from 'next/font/google'

const ibm = IBM_Plex_Mono({ subsets: ['latin'], variable: '--font-ibm', weight: ['400']});

export const metadata = {
  title: 'lattaro',
  description: "joao lattaro's portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibm.variable} font-ibm bg-neutral-900 text-zinc-300`}>{children}</body>
    </html>
  )
}
