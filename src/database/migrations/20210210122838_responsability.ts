import * as Knex from 'knex'

export const up = async (knex: Knex): Promise<void> =>
    knex.schema.createTable(
        'responsabilities',
        (table: Knex.CreateTableBuilder) => {
            table.uuid('id').unique().primary().notNullable()
            table.text('description').notNullable()
        }
    )

export const down = async (knex: Knex): Promise<void> =>
    knex.schema.dropTable('responsabilities')
