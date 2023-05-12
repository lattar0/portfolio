import { Language } from './Language';

export function About() {
  return (
    <div className='flex gap-4 ml-4'>
      <span className='text-xl text-yellow-300'>about:</span>
      <div className='flex flex-col gap-4 text-lg'>
        <div>
          <p>
            Hello! My name is João Francisco,
          </p>

          <p>
            I have been studying programming for 3 years.
          </p>
        </div>

        <p>
          During this period, I learned a little about
          various technologies, such as <Language>HTML</Language>, <Language>CSS</Language>,
          {' '}<Language>Javascript</Language>, <Language>Typescript</Language>, <Language>NodeJS</Language>, <Language>React</Language>,
          {' '}<Language>React Native</Language>, <Language>Next.JS</Language>, and <Language>Git.</Language>
        </p>

        <p>
          I put my knowledge into practice by creating
          my projects, which I will show later.
        </p>

        <p>
          I am currently taking the Rocketseat course and
          I have put into practice the knowledge learned,
          such as this site.
        </p>

      </div>
    </div>
  )
}
