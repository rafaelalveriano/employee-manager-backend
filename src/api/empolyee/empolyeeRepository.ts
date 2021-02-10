import { EmpolyeeType } from './empolyeeType'

import Database from '../../database'

const table = 'empolyees'

export const listEmpolyee = async () => await Database(table)

export const storeEmpolyee = async (data: EmpolyeeType): Promise<void> =>
    await Database(table).insert(data)

export const updateEmpolyee = async (data: EmpolyeeType, id: string) =>
    await Database(table).update(data).where({ id })

export const removeEmpolyee = async (ids: []) =>
    await Database(table).whereIn('id', ids).del()
