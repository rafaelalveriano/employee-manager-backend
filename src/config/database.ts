import knex from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

export default knex({
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB,
    },
    migrations: {
        directory: `${__dirname}/src/database/migrations`,
    },
})
