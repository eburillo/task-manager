import { gql } from '@apollo/client'

export const GET_PROJECTS = gql`
  query getProjects {
    projects {
      _id
      name
      description
      tasks {
        _id
        title
      }
    }
  }
`

export const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(_id: $id) {
      _id
      name
      description
      tasks {
        _id
        title
        project {
          _id
        }
      }
    }
  }
`

export const CREATE_PROJECT = gql`
  mutation ($name: String, $description: String) {
    createProject(name: $name, description: $description) {
      _id
      name
      description
    }
  }
`

export const DELETE_PROJECT = gql`
  mutation deleteProject($id: ID) {
    deleteProject(_id: $id) {
      _id
      name
    }
  }
`
