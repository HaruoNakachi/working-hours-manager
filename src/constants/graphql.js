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
