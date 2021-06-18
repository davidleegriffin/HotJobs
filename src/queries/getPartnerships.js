import { gql } from "graphql-tag"

export const GET_PARTNERSHIPS = gql`
  query partnerships {
    partnerships {
        Alert__A
        Deadline__B
        AAForm__C
        Company__D
        Location__E
        Description__F
        Website__G
    }
  }
`