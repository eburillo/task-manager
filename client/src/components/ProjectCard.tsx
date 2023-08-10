import { useNavigate } from 'react-router'
import { IProject } from '../types'

export default function ProjectCard({ project }: { project: IProject }) {
  const navigate = useNavigate()

  return (
    <button
      className='text-left bg-white w-full rounded-lg border shadow-black p-4 mb-2 hover:border-sky-500'
      onClick={() => navigate(`/projects/${project._id}`)}
    >
      <h2 className='text-slate-900'>{project.name}</h2>
      <p className='text-sm text-slate-500'>{project.description}</p>
    </button>
  )
}
