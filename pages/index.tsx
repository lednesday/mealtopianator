import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import prisma from '../lib/prisma'
import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const meals = await prisma.mealPlan.findMany({
    include: {
      owner: {
        select: { name: true },
      },
    },
  });
  return { props: { meals: meals } };
};

export default function Home() {
  const [session, loading] = useSession()
  if (session && session.user && session.user.name) {
    console.log("session:", session);
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>mealtopianator</title>
        <meta name="description" content="Group meal planning tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.login}>
        {!session && <>
          Not signed in
          <button onClick={() => signIn()}>Sign in</button>
        </>}
        {session && session.user && session.user.name && session.user.image && <>
          Signed in as {`   `}
          <span className={styles.avatarwrapper}>
            <Image className={styles.avatar} height="40" width="40" src={session.user.image} alt="avatar" />
          </span> {`   `}
          {session.user.name} {`   `}
          <button onClick={() => signOut()}>Sign out</button>
        </>}
      </div>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This . is . the . MEALTOPIANATOR!!!
        </h1>
        <p className={styles.description}>
          You will start by
          <span>
            <Link href={`/new-account`}>
              <a> creating an account</a>
            </Link>
          </span> or
          <span>
            <Link href={`/login`}>
              <a> logging in</a>
            </Link>
          </span>.
        </p>
      </main>

      <footer className={styles.footer}>
        <a>
          by Chris Jones and Lindsay Marean
        </a>
      </footer>
    </div>
  )
}
