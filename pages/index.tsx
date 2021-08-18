import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
          You will start by creating an account or logging in.
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
