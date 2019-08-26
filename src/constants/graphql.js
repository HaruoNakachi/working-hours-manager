import gql from 'graphql-tag'

export const WORKING_HOURS = gql`
  query workings {
    workings {
      id
      day
      start
      end
      memo
      break
    }
  }
`
export const UPDATE_WORKING_HOURS = gql`
  mutation updateWorking($memo: String!, $id: ID!, $start: DateTime!, $end: DateTime!, $break: String!) {
    updateWorking(
      data: {
        memo: $memo
        start: $start
        end: $end
        break: $break
      }
      where: {
        id: $id
    }) {
      id
      memo
      start
      end
      break
    }
  }
`

export const SIGNIN = gql`
  query signIn($email: String!, $authId: String!) {
    staffs(where: {authId: $authId, email: $email}) {
      id
      name
      authId
      createdAt
    }
  }
`

export const CREATE_USER = gql`
  mutation createStaff($status: Status!, $name: String!, $email: String!, $authid: String!) {
    createStaff(data: {status: $status, name: $name, email: $email, authId: $authid }) {
      id
      authId
    }
  }
`
