import { JetBrains_Mono } from 'next/font/google';

const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', weight: '700'});

export function Header() {
  return (
    <header className='flex items-center justify-center py-8 px-32'>
      <span className={`${jetbrains.variable} font-jetbrains text-yellow-300 text-xl`}>lattaro();</span>
    </header>
  )
}
