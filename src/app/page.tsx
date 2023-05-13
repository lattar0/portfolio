import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Header } from '@/components/Header'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <div className='h-screen'>

      <Header />

      <main className='flex gap-10 items-center justify-center mx-auto my-4 max-w-2xl'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <span className='text-xl text-emerald-600'>const</span>
            <span className='text-xl'>João Francisco</span>
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
