import { gql } from "@apollo/client";

export const getRepository = gql`
  query GetRepository(
    $repositoryOwner: String!
    $repositoryName: String!
    $issuesFirst: Int
  ) {
    repository(owner: $repositoryOwner, name: $repositoryName) {
      name
      issues(first: $issuesFirst) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;
