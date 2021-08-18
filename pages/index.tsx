import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { signIn, signOut, useSession } from 'next-auth/client'




export default function Home() {
  const [session, loading] = useSession()

  return (
    <div className={styles.container}>
      {!session && <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>}
      {session && <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>}

      <Head>
        <title>mealtopianator</title>
        <meta name="description" content="Group meal planning tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
