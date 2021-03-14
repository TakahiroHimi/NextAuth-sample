import { signIn, signOut, useSession } from "next-auth/client";
import client from "../apollo-client";
import {
  GetRepositoryDocument,
  GetRepositoryQueryVariables,
  Repository,
} from "../graphql/queries/types.d";

type Props = {
  repository: Repository;
};

export default function Page({ repository }: Props) {
  const [session, loading] = useSession();
  console.log("Client", repository?.issues);

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

      {repository?.name}
      {/* {repository?.issues.edges?.map((issue) => {
        return issue?.node?.title;
      })} */}
    </>
  );
}

export async function getServerSideProps() {
  const { data: data } = await client.query({
    query: GetRepositoryDocument,
    variables: {
      repositoryOwner: "octocat",
      repositoryName: "Hello-World",
      issuesFirst: 10,
    } as GetRepositoryQueryVariables,
  });

  console.log("SSR", JSON.stringify(data));

  return {
    props: {
      repository: data as Repository,
    },
  };
}
