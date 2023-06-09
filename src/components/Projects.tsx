"use client"

import { useEffect, useState } from 'react';
import { Project } from './Project';
import { api } from '@/utils/baseUrl';
import { ObjectContainer } from './base/ObjectContainer';

interface ProjectsProps {
  name: string
  description: string
  language: string
  html_url: string
  stargazers_count: number
}

export function Projects() {
  const [repositories, setRepositories] = useState<ProjectsProps[]>([])

  useEffect(() => {
    api.get<ProjectsProps[]>('/repos').then(res => {
      setRepositories(res.data)
    })
  }, [])

  const repositoriesFiltered = repositories.filter((repository) => repository.stargazers_count >= 1)

  return (
    <ObjectContainer>
      <div className='flex gap-3'>
        <span className='md:text-lg text-sm text-emerald-600'>projects:</span>
        <span className='md:text-lg text-sm text-yellow-300'>{'[{'}</span>
      </div>

      <div>
        {
          repositoriesFiltered.map((repository, index) => (
            <>
              <Project
                key={index}
                description={repository.description}
                name={repository.name}
                repository={repository.html_url}
                stars={repository.stargazers_count}
                language={repository.language}
              />

              <span className='md:text-lg text-sm text-yellow-300'>{'}'}</span>
            </>
          ))

        }

        <span className='md:text-lg text-sm text-yellow-300'>{']'}</span>
      </div>
    </ObjectContainer>
  )
}
