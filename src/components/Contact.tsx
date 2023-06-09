import { ObjectContainer } from './base/ObjectContainer';

export function Contact() {
  return (
    <div>
    <ObjectContainer>
      <div className='flex gap-3'>
        <span className='md:text-xl text-sm text-emerald-600'>{'contact:'}</span>
        <span className='md:text-xl text-sm text-yellow-300'>{'{'}</span>
      </div>
        <div className='flex flex-col gap-2 ml-4'>
          <div className='flex gap-2'>
            <span className='md:text-xl text-sm text-emerald-500'>email:</span>
            <a href='mailto:joaolattarog@gmail.com' target='_blank' className='md:text-lg text-sm hover:underline'>joaolattarog@gmail.com</a>
          </div>

          <div className='flex gap-2'>
            <span className='md:text-xl text-sm text-emerald-500'>github:</span>
            <a href='https://github.com/lattar0' target='_blank' className='md:text-lg text-sm hover:underline'>lattar0</a>
          </div>

          <div className='flex gap-2'>
            <span className='md:text-xl text-sm text-emerald-500'>linkedin:</span>
            <a
              href='https://www.linkedin.com/in/joão-francisco-lattaro-guerreiro-516998207/'
              className='md:text-lg text-sm hover:underline'
            >
              João Francisco Lattaro Guerreiro
            </a>
          </div>
        </div>
        <span className='md:text-xl text-sm text-yellow-300'>{'}'}</span>
    </ObjectContainer>
    </div>
  )
}
