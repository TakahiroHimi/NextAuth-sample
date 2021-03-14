import { signIn, signOut, useSession } from "next-auth/client";
import client from "../apollo-client";
import {
  GetRepositoryDocument,
  GetRepositoryQueryVariables,
  GetRepositoryQueryResult
} from "../graphql/queries/types";

export default function Page() {
  const [session, loading] = useSession();

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} {session.accessToken} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}

export async function getStaticProps() {
  const { data: data } = await client.query({
    query: GetRepositoryDocument,
    variables: {
      repositoryOwner: "octocat",
      repositoryName: "Hello-World",
      issuesFirst: 10,
    } as GetRepositoryQueryVariables,
  });

  return {
    props: {
      repository: data as GetRepositoryQueryResult,
    },
  };
}
