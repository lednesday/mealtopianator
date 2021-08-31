import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import prisma from '../lib/prisma'
import { GetServerSideProps } from 'next'
import Lister from '../components/Lister/Lister'

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
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div className={styles.login}>
        {!session && <>
          Not signed in &nbsp;
          <button onClick={() => signIn()}>Sign in</button>
        </>}
        {session && session.user && session.user.name && session.user.image && <>
          Signed in as &nbsp;
          <Image className={styles.avatar} height="40" width="40" src={session.user.image} alt="avatar" />
          &nbsp; {session.user.name} &nbsp;
          <button onClick={() => signOut()}>Sign out</button>
        </>}
      </div>

      <main className={styles.main}>
        {!session && <>
          <h1 className={styles.title}>
            This . is . the . MEALTOPIANATOR!!!
          </h1>
          <p className={styles.description}>
            Sign in above to create a meal.
          </p>
        </>}
        {session && <>
          <Link href={`/meal-choice`} passHref>
            <button>Create a meal</button>
          </Link>
          <p>Your existing meals: </p>
          {/* <Lister itemArray={}/> */}
        </>}
      </main>

      <footer className={styles.footer}>
        <a>
          by Chris Jones and Lindsay Marean
        </a>
      </footer>
    </div>
  )
}
