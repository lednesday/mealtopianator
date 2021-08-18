import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            scope: ""
        }),
        // ...add more providers here
    ],

    // TODO Read this secret from the environment when deployed.
    // https://next-auth.js.org/configuration/options#secret
    secret: "foo",

    // A database is optional, but required to persist accounts in a database
    database: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "mealtopianator",
        password: process.env.DATABASE_PASSWORD,
        database: "mealtopianator",
        // This auto-creates the next-auth schema in the database.
        // TODO For production, disable this and use schema management instead.
        synchronize: true,
    },
})
