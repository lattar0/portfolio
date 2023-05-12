interface ProjectProps {
  name: string
  description: string
  technologies: string[]
  repository: string
}

export function Project({ description, name, repository, technologies  }: ProjectProps) {
  return (
    <div className='flex gap-2 flex-col ml-5'>
      <div>
        <span className='text-xl text-yellow-300'>
          name:
        </span>

        <span className='text-xl text-zinc-300 ml-2'>{name}</span>
      </div>

      <div>
        <span className='text-xl text-yellow-300'>
          description:
        </span>

        <span className='text-xl text-zinc-300 ml-2'>{description}</span>
      </div>

      <div>
        <span className='text-xl text-yellow-300'>
          repository:
        </span>

        <a href={repository} className='text-xl text-zinc-300 ml-2 hover:underline'>{repository}</a>
      </div>

      <div>
        <span className='text-xl text-yellow-300'>
          languages:
        </span>

        <span className='text-xl text-zinc-300 ml-2'>{technologies.join(', ')}</span>
      </div>
    </div>
  )
}
