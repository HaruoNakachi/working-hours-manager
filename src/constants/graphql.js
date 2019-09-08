import gql from 'graphql-tag'

export const WORKING_HOURS = gql`
  query workings($month: Int!, $userId: String!) {
    workings(where: {month: $month, userId: $userId}) {
      id
      day
      start
      end
      memo
      break
    }
  }
`
export const CHECK_WORKING = gql`
  query checkworkings($day: DateTime!, $userId: String!) {
    workings(where: {day: $day, userId: $userId}) {
      id
      day
      start
      end
      memo
      break
    }
  }
`

export const DETAIL_WORKING = gql`
  query detailworking($id: ID!) {
    workings(where: {id: $id}) {
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

export const CREATE_WORKING = gql`
  mutation createWorking($month: Int!, $memo: String!, $day: DateTime!, $start: DateTime!, $end: DateTime!, $break: String!, $userId: String!) {
    createWorking(
      data: {
        month: $month,
        day: $day,
        start: $start,
        end: $end,
        break: $break,
        memo: $memo,
        userId: $userId
      }
    ) {
      id
      day
      start
      end
      break
      memo
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
  mutation createStaff($status: Status = PUBLISHED, $name: String!, $email: String!, $authId: String!) {
    createStaff(data: {status: $status, name: $name, email: $email, authId: $authId }) {
      id
      authId
    }
  }
`
