import Project from './models/Project.js'
import Task from './models/Task.js'

export const resolvers = {
  Query: {
    project: async (_, { _id }) => await Project.findById(_id),
    projects: async () => await Project.find(),
    task: async (_, { _id }) => await Task.findById(_id),
    tasks: async () => await Task.find()
  },
  Mutation: {
    createProject: async (_, args) => {
      const { name, description } = args
      const project = new Project({ name, description })
      const savedProject = await project.save()
      return savedProject
    },
    updateProject: async (_, args) => {
      const updatedProject = await Project.findByIdAndUpdate(args._id, args, {
        new: true
      })
      if (!updatedProject) throw new Error('Project not found')
      return updatedProject
    },
    deleteProject: async (_, { _id }) => {
      const deletedProject = await Project.findByIdAndDelete(_id)
      if (!deletedProject) throw new Error('Project not found')

      await Task.deleteMany({ projectId: deletedProject._id })
      return deletedProject
    },
    createTask: async (_, args) => {
      const { title, projectId } = args
      const projectFound = await Project.findById(projectId)
      if (!projectFound) {
        throw new Error('Project not found!')
      }
      const task = new Task({ title, projectId })
      const savedTask = await task.save()
      return savedTask
    },
    updateTask: async (_, args) => {
      const updatedTask = await Task.findByIdAndUpdate(args._id, args, {
        new: true
      })
      if (!updatedTask) throw new Error('Task not found')
      return updatedTask
    },
    deleteTask: async (_, { _id }) => {
      const deletedTask = await Task.findByIdAndDelete(_id)
      if (!deletedTask) throw new Error('Task not found')
      return deletedTask
    }
  },
  Project: {
    tasks: async (parent) => await Task.find({ projectId: parent._id })
  },
  Task: {
    project: async (parent) => await Project.findById(parent.projectId)
  }
}
