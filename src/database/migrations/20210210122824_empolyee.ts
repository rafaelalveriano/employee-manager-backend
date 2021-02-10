import * as Knex from 'knex'

export const up = async (knex: Knex): Promise<void> =>
    knex.schema.createTable('empolyees', (table: Knex.CreateTableBuilder) => {
        table.increments('id')
        table.text('firstName').notNullable()
        table.text('lastName').notNullable()
        table.text('responsability').notNullable()
        table.text('birthdata').notNullable()
        table.text('salary').notNullable()
    })

export const down = async (knex: Knex): Promise<void> =>
    knex.schema.dropTable('empolyees')
