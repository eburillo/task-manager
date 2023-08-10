import { useMutation } from '@apollo/client'
import { useState } from 'react'
import { CREATE_PROJECT, GET_PROJECTS } from '../graphql/projects'

export default function ProjectForm() {
  const [project, setProject] = useState({
    name: '',
    description: ''
  })

  const [createProject, { loading, error }] = useMutation(CREATE_PROJECT, {
    refetchQueries: [{ query: GET_PROJECTS }, 'GetProjects']
  })

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProject({
      ...project,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, description } = project
    createProject({
      variables: {
        name,
        description
      }
    })
  }

  if (error) return <p>ERROR: {error.message}</p>

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/5'>
        <input
          type='text'
          name='name'
          placeholder='project name'
          onChange={handleChange}
          className='rounded-lg shadow-lg p-4 block w-full mb-3 text-sm'
        />
        <textarea
          name='description'
          rows={3}
          placeholder='project description'
          onChange={handleChange}
          className='rounded-lg shadow-lg p-4 block w-full mb-3 text-sm'
        ></textarea>
        <input
          type='submit'
          value='Save'
          disabled={!project.name || !project.description || loading}
          className='text-white text-sm bg-sky-500 px-4 py-2 rounded-md mb-3 disabled:bg-slate-400'
        />
      </form>
    </>
  )
}
