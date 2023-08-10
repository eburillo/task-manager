import { useMutation } from '@apollo/client'
import { ITask } from '../../types'
import { DELETE_TASK } from '../../graphql/tasks'
import { AiOutlineDelete } from 'react-icons/ai'

export default function TaskCard({ task }: { task: ITask }) {
  const [deleteTask] = useMutation(DELETE_TASK, {
    refetchQueries: ['getProject']
  })

  const handleDelete = () => {
    deleteTask({
      variables: {
        id: task._id
      }
    })
  }

  return (
    <div className='text-left bg-white w-full rounded-lg border shadow-black p-4 mb-2 hover:border-sky-500 flex justify-between align-center'>
      <h3 className='text-sm'>{task.title}</h3>
      <button
        className='bg-red-500 px-3 py-2 rounded text-white'
        onClick={handleDelete}
      >
        <AiOutlineDelete />
      </button>
    </div>
  )
}
