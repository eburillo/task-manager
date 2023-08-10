export type IProject = {
  name: string
  description?: string
  _id: string
  createdAt: string
  updatedAt: string
}

export type ITask = {
  _id: string
  title: string
  project: IProject
  createdAt: string
  updatedAt: string
}

export type IHeader = {
  title: string
  description: string
  hasBackButton?: boolean
}
