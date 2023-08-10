import { ITask } from '../../types'
import TaskCard from './TaskCard'

export default function TasksList({ tasks }: { tasks: ITask[] }) {
  if (!tasks) return
  return (
    <div className='overflow-y-auto h-full w-full pl-5 pr-3'>
      {tasks.map((task) => {
        return <TaskCard task={task} />
      })}
    </div>
  )
}
