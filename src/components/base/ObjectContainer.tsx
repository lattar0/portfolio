import { CaretDown, CaretRight } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'

interface ObjectContainerProps {
  children: React.ReactNode
  isFlexColumn?: boolean
}

export function ObjectContainer({ children, isFlexColumn = true }: ObjectContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [caretSize, setCaretSize] = useState(20)

  useEffect(() => {
    if (window !== undefined) {
      if (window.innerWidth < 768) {
        setCaretSize(16)
      }
    }
  }, [])

  return (
    <div className='flex group gap-2'>
      <div className='md:mt-1.5 mt-1 invisible group-hover:visible'>
        {
          isExpanded ? (
            <CaretRight
              size={caretSize}
              weight='fill'
              className='cursor-pointer text-emerald-600'
              onClick={() => setIsExpanded(false)}
            />
          ) : (
            <CaretDown
              size={caretSize}
              weight='fill'
              className='cursor-pointer text-emerald-600'
              onClick={() => setIsExpanded(true)}
            />
          )
        }
      </div>

      <div className={`${isFlexColumn ? 'flex-col' : ''} ${isExpanded ? 'md:max-h-7 max-h-6' : ''} flex gap-2 overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}
