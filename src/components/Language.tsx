import { ReactNode } from 'react';

interface LanguageProps {
  children: ReactNode;
}

export function Language({ children }: LanguageProps) {
  return (
    <span className='text-yellow-300'>{children}</span>
  )
}
