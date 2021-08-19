import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'
import { getOrCreateConnection } from '../utils'
import { MealPlan } from '../models/mealplan.model'

export async function getServerSideProps() {
  const conn = await getOrCreateConnection();
  // const mpRepo = conn.getRepository<MealPlan>(MealPlan);

  return {
    props: {}
  };
}

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

      <main className={styles.main}>
        <div className={styles.loginStatus}>
          {!session && <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </>}
          {session && session.user && session.user.name && <>
            Signed in as {session.user.name} {`   `}
            <image>href={session.user.image}</image> {`   `}
            <button onClick={() => signOut()}>Sign out</button>
          </>}
        </div>

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
