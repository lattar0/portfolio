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
    <div className='h-screen'>

      <Header />

      <main className='flex gap-10 items-center justify-center mx-auto my-4 max-w-2xl'>
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-1'>
            <span className='text-xl text-emerald-600'>const</span>
            <span id='name' className='text-xl ml-2'></span>
            <span className='w-0.5 h-6 bg-slate-300 mr-2 animate-blink' />
            <span className='text-xl text-emerald-600'>=</span>
            <span className='text-xl text-yellow-300'>{"{"}</span>
          </div>

          <About />

          <Projects />

          <Contact />
        </div>
      </main>
    </div>
  )
}
