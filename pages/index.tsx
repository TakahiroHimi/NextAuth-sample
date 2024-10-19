import { useSession, signIn, signOut } from "next-auth/react";

const Page = () => {
  // const [session, loading] = useSession();
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <>
      {!session && (
        <>
          {loading ? (
            <>Loading ...</>
          ) : (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
        </>
      )}
      {session?.user && (
        <>
          Signed in as <img src={session.user.image ?? ""} width="50px" />　
          {session.user.name} <br />
          {/* AccessToken : {session.user} <br /> */}
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
};

export default Page;
