import { Project } from './Project';

export function Projects() {
  return (
    <div className='flex flex-col gap-2 ml-4'>
      <div className='flex gap-3'>
        <span className='text-xl text-yellow-300'>projects:</span>
        <span className='text-xl text-yellow-300'>{'[{'}</span>
      </div>

      <Project name='Passweird' description="A mobile application that has the purpose of saving passwords for you, just enter the username and password and that's it, it's saved!" repository='https://google.com' technologies={['asdas', 'sadas']}/>
    </div>
  )
}
