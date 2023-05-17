import { Language } from './Language';
import { ObjectContainer } from './base/ObjectContainer';

export function About() {
  return (
    <ObjectContainer isFlexColumn={false}>
      <span className='md:text-xl text-sm text-emerald-600'>about:</span>
      <div className='flex flex-col gap-4 text-lg'>
        <div>
          <p className='md:text-lg text-sm'>
            Hello! My name is João Francisco,
          </p>

          <p className='md:text-lg text-sm'>
            I have been studying programming for 3 years.
          </p>
        </div>

        <p className='md:text-lg text-sm'>
          During this period, I learned a little about
          various technologies, such as <Language>HTML</Language>, <Language>CSS</Language>,
          {' '}<Language>Javascript</Language>, <Language>Typescript</Language>, <Language>NodeJS</Language>, <Language>React</Language>,
          {' '}<Language>React Native</Language>, <Language>Next.JS</Language>, and <Language>Git.</Language>
        </p>

        <p className='md:text-lg text-sm'>
          I put my knowledge into practice by creating
          my projects, which I will show later.
        </p>

        <p className='md:text-lg text-sm'>
          I am currently taking the Rocketseat course and
          I have put into practice the knowledge learned,
          such as this site.
        </p>

      </div>
    </ObjectContainer>
  )
}
