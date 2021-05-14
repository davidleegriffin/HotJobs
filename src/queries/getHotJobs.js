import { gql } from "graphql-tag"

export const GET_HOTJOBS = gql`
  query hotjobs {
    hotjobs {
      employerName__A
      jobTitle__B
      jobLocation__C
      jobUrl__D
    }
  }
`