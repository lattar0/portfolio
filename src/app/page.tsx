'use client'

import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'
import { typingEffect } from '@/utils/typeEffect'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const words = ['João Francisco', 'lattar0', 'João Lattaro']

    typingEffect(words)
  }, [])

  return (
    <div className='flex flex-col items-center h-screen'>

      <Header />

      <main className='flex flex-col items-center justify-center max-w-[375px] sm:max-w-xl'>
        <div className='flex flex-col gap-3 max-w-full md:max-w-2xl'>
          <div className='flex items-center gap-1'>
            <span className='md:text-xl text-sm text-emerald-600'>const</span>
            <span id='name' className='md:text-xl text-sm ml-2'></span>
            <span className='w-0.5 h-6 bg-slate-300 mr-2 animate-blink' />
            <span className='md:text-xl text-sm text-emerald-600'>=</span>
            <span className='md:text-xl text-sm text-yellow-300'>{"{"}</span>
          </div>

          <About />

          <Projects />

          <Contact />
          <span className='md:text-lg text-sm text-yellow-300 mb-6'>{"}"}</span>
        </div>
      </main>
    </div>
  )
}
