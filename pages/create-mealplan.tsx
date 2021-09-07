import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { SyntheticEvent } from 'react'

export default function CreatePlan() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create a Mealplan</title>
            </Head>


            <h1 className={styles.main}>Create a mealplan</h1>

            <CreateMealplanForm />

            {/* <form action="???" method="POST">
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
            </form> */}

        </div>
    )
}

function CreateMealplanForm() {
    // using this guide: https://nextjs.org/blog/forms
    const createMealplan = async (event: SyntheticEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const result = await fetch("/api/createplan", {
          body: JSON.stringify({
            name: event.target.name.value,
            description: event.target.description.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        }).catch((error) => {
          console.error("Error:", error);
        });

        const resultJSON = await result.json();
        // result is an object like result.planName => "Jingleheimer-Schmitt Family Reunion"
        console.log("mealplan description: ", result.description)

        event.target.reset();
    }

    return (
        <form onSubmit={createMealplan}>
            <ul>
                <li>
                    <label htmlFor="name">Mealplan name</label>
                    <input id="name" name="name" type="text" autoComplete="off" required maxLength={40} />
                </li>
                <li>
                    <label htmlFor="description">Mealplan description</label>
                    <input id="description" name="description" type="text" autoComplete="off" maxLength={400} />
                </li>
                <li>
                    <button type="submit">Create</button>
                </li>
            </ul>
        </form>
    )
}