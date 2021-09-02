import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function CreatePlan() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create a Mealplan</title>
            </Head>


            <h1 className={styles.main}>Create a mealplan</h1>

            <form action="???" method="POST">
                <ul>
                    <li>
                        <label htmlFor="name">Mealplan name</label>
                        <input id="name" type="text" autoComplete="off" required maxLength={40} />
                    </li>
                    <li>
                        <label htmlFor="description">Mealplan description</label>
                        <input id="description" type="text" autoComplete="off" maxLength={400} />
                    </li>
                    <li>
                        <button type="submit">Create</button>
                    </li>
                </ul>
            </form>

        </div>
    )
}
