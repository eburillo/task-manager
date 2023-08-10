import Header from '../components/Header'
import ProjectForm from '../components/ProjectForm'
import ProjectList from '../components/ProjectList'

export default function Projects() {
  return (
    <>
      <Header
        title='Project Manager'
        description='Create and organize your projects splitting them into tasks and save time overthinking'
      />
      <div className='flex justify-between h-5/6'>
        <ProjectForm />
        <ProjectList />
      </div>
    </>
  )
}
