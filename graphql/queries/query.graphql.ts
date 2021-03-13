import { gql } from "@apollo/client";

export const getRepository = gql`
  query getRepository($name: String!, $owner: String!){
  repository(name: $name, owner: $owner) {
    name
    issues(first: 10) {
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
