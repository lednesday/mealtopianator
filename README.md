# mealtopianator
***The Plantaculaganzic Mealtopianator*** is a menu planning tool for groups

## Overview
***The Plantaculaganzic Mealtopianator*** is a web app for collaboratively planning a series of shared group meals. Prototypical applications include multi-day river trips and group camping trips where the group shares responsiblity for preparing and eating the meals. In a typical situation, a trip planner will create a user account and a trip meal itinerary. Links to the itinerary can be sent to trip partipants, who will then sign up to prepare different meals and indicate the courses to be served. 

## The Stack
***The Plantaculaganzic Mealtopianator*** is a distributed online app with a frontend user interface built within the Next.js framework. The backend consists of a Postgres database to manage and store user and meal itinerary information. 

## Contributors
***The Plantaculaganzic Mealtopianator*** is developed and maintained by Chris Jones and Lindsay Jones Marean. 

## Known Bugs and Future Enhancements
We're working on our first MVP version of ***The Plantaculaganzic Mealtopianator***, which will allow a person to create an account, log in, and create a meal with a name and description.

# Next.js README

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Install PostgreSQL (`brew install postgres`) and start it (`brew services start postgresql`). If you've already started
    PostgreSQL before, use `brew services restart postresql`.
1. Set up your `.env`.
    - Set `GITHUB_ID` and `GITHUB_SECRET` by creating a new OAuth app at [GitHub](https://github.com/settings/developers).
        - Use `http://localhost:3000/` for the Homepage URL.
        - Use `http://localhost:3000/api/auth/callback/github` for the callback.
    - Set `NEXTAUTH_URL` to `http://localhost:3000/`.
    - Set `DATABASE_PASSWORD` to the password for the mealtopianator user in the database.
    - Set `DATABASE_URL` to `postgresql://mealtopianator:${DATABASE_PASSWORD}@localhost:5432/mealtopianator?schema=public`,
        substituting the password.
1. Run the development server:
    ```bash
    npm run dev
    ```
1. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
