import { EmployeeType } from './type'

import Database from '../../database'

const table = 'employee'

export const listEmployee = async () => await Database(table)

export const storeEmployee = async (data: EmployeeType): Promise<void> =>
    await Database(table).insert(data)

export const updateEmployee = async (data: EmployeeType, id: string) =>
    await Database(table).update(data).where({ id })

export const removeEmployee = async (ids: []) =>
    await Database(table).whereIn('id', ids).del()
