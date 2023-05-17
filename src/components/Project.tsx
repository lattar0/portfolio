interface ProjectProps {
  name: string
  description: string
  language: string
  repository: string
  stars: number
}

export function Project({ description, name, repository, language, stars }: ProjectProps) {
  return (
    <div className='flex gap-2 flex-col ml-5'>
      <div>
        <span className='md:text-xl text-sm text-emerald-500'>
          name:
        </span>

        <span className='md:text-xl text-sm text-zinc-300 ml-2'>{name}</span>
      </div>

      {
        description === null ? (
          <></>
        ) : (
          <div className='flex gap-2'>
            <span className='md:text-xl text-sm text-emerald-500'>
              description:
            </span>
            <span className='md:text-xl text-sm text-zinc-300'>{description}</span>
          </div>
        )
      }

      <div className='flex flex-col md:flex-row'>
        <span className=' md:text-xl text-sm text-emerald-500'>
          repository:
        </span>

        <a href={repository} target='_blank' className='md:text-xl text-sm text-zinc-300 md:ml-2 hover:underline'>{repository}</a>
      </div>

      <div>
        <span className='md:text-xl text-sm text-emerald-500'>
          stars:
        </span>

        <a className='md:text-xl text-sm text-zinc-300 ml-2'>{stars}</a>
      </div>

      <div>
        <span className='md:text-xl text-sm text-emerald-500'>
          language:
        </span>

        <span className='md:text-xl text-sm text-zinc-300 ml-2'>{language}</span>
      </div>
    </div>
  )
}
