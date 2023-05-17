import { CaretDown, CaretRight, DotsThreeOutline } from '@phosphor-icons/react'
import { useState } from 'react'

interface ObjectContainerProps {
  children: React.ReactNode
  isFlexColumn?: boolean
}

export function ObjectContainer({ children, isFlexColumn = true }: ObjectContainerProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='flex group'>
      <div className='mt-1.5 invisible group-hover:visible'>
      {
        isExpanded ? (
          <CaretRight
            size={20}
            weight='fill'
            className='cursor-pointer text-emerald-600'
            onClick={() => setIsExpanded(false)}
          />
        ) : (
          <CaretDown
            size={20}
            weight='fill'
            className='cursor-pointer text-emerald-600'
            onClick={() => setIsExpanded(true)}
          />
        )
      }
      </div>
      
      <div className={`${isFlexColumn ? 'flex-col' : ''} ${isExpanded ? 'md:max-h-7 max-h-6' : ''} flex gap-2 md:ml-4 overflow-hidden`}>
        {children}
      </div>
    </div>
  )
}
