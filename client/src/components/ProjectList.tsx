import { useQuery } from '@apollo/client'
import { GET_PROJECTS } from '../graphql/projects'
import ProjectCard from './ProjectCard'
import { IProject } from '../types'

export default function ProjectList() {
  const { data, loading, error } = useQuery(GET_PROJECTS)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className='overflow-y-auto h-full w-full pl-5 pr-3'>
      {data.projects.map((project: IProject) => (
        <ProjectCard key={project._id} project={project} />
      ))}
    </div>
  )
}
