import { useMutation } from '@apollo/client'
import { CREATE_TASK } from '../../graphql/tasks'
import { useNavigate, useParams } from 'react-router'

import { DELETE_PROJECT } from '../../graphql/projects'
import { useState } from 'react'

export default function TaskForm() {
  const [task, setTask] = useState('')
  const [createTask, { loading }] = useMutation(CREATE_TASK, {
    refetchQueries: ['getProject']
  })

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    refetchQueries: ['getProjects']
  })

  const params = useParams()
  const navigate = useNavigate()

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value)
  }

  const handleDeleteProject = () => {
    deleteProject({
      variables: {
        id: params.id
      }
    })
    navigate(`/projects/`)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const target = e.target as HTMLFormElement & {
      title: { value: string }
    }

    await createTask({
      variables: {
        title: task,
        projectId: params.id
      }
    })
    setTask('')
    ;(target[0] as HTMLInputElement).focus()
  }

  return (
    <form onSubmit={handleSubmit} className='w-2/5 flex flex-col'>
      <input
        type='text'
        name='title'
        placeholder='add a task'
        className='rounded-lg shadow-lg p-4 block w-full mb-3 text-sm'
        onChange={handleChange}
        value={task}
      />
      <button
        disabled={!task || loading}
        className='bg-sky-500 text-white w-full p-2 rounded mb-10 disabled:bg-slate-400'
      >
        Add
      </button>
      <div className='mt-auto'>
        <button
          className='bg-red-500 px-3 py-2 rounded text-white w-full'
          onClick={handleDeleteProject}
        >
          Delete project
        </button>
      </div>
    </form>
  )
}
