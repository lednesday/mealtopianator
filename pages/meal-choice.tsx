import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Post() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meal Choice</title>
            </Head>


            <h1 className={styles.main}>Meal Choice</h1>
        </div>
    )
}
