import * as dotenv from 'dotenv'
dotenv.config()

module.exports = {
    development: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB,
        },
        migrations: {
            table_name: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`,
        },
    },

    production: {
        client: 'mysql2',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PWD,
            database: process.env.DB,
        },
        migrations: {
            table_name: 'knex_migrations',
            directory: `${__dirname}/src/database/migrations`,
        },
    },
}
