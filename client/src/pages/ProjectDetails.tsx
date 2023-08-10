import { useQuery } from '@apollo/client'
import { useParams } from 'react-router'
import { GET_PROJECT } from '../graphql/projects'
import TasksList from '../components/tasks/TasksList'
import TaskForm from '../components/tasks/TaskForm'
import Header from '../components/Header'

export default function ProjectDetails() {
  const params = useParams()

  const { data, loading, error } = useQuery(GET_PROJECT, {
    variables: {
      id: params.id
    },
    skip: !params.id
  })

  if (error) return <p>error</p>
  if (loading) return <p>loading...</p>

  return (
    <>
      <Header
        title={data.project.name}
        description={data.project.description}
        hasBackButton
      />

      <div className='flex justify-between h-5/6'>
        <TaskForm />
        <TasksList tasks={data.project.tasks} />
      </div>
    </>
  )
}
