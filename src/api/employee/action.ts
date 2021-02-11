import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import {
    listEmployee,
    storeEmployee,
    removeEmployee,
    updateEmployee,
} from './repository'

import Error from '../../common/error'
import { EmployeeType } from './type'

export const list = async (req: Request, res: Response) => {
    try {
        return res.send(await listEmployee())
    } catch (error) {
        return Error(res).error500('Error ao listar os dados')
    }
}

export const store = async (req: Request, res: Response) => {
    const data = { id: uuidv4(), ...req.body }
    try {
        await storeEmployee(data)
        res.send(data)
    } catch (err) {
        return Error(res).error500('Error ao registrar os dados')
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const data: EmployeeType = req.body

    try {
        await updateEmployee(data, id)

        res.send().status(200)
    } catch (error) {
        return Error(res).error500('Error editar os dados')
    }
}

export const remove = async (req: Request, res: Response) => {
    const ids: [] = req.body

    try {
        await removeEmployee(ids)
        res.send().status(200)
    } catch (error) {
        return Error(res).error500('Error deletar os dados')
    }
}
