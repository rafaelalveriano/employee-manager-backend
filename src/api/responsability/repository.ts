import { ResponsabilityType } from './type'

import Database from '../../database'

const table = 'responsabilities'

export const listResponsability = async () => await Database(table)

export const storeResponsability = async (
    data: ResponsabilityType
): Promise<void> => await Database(table).insert(data)

export const updateResponsability = async (
    data: ResponsabilityType,
    id: string
) => await Database(table).update(data).where({ id })

export const removeResponsability = async (ids: []) =>
    await Database(table).whereIn('id', ids).del()
