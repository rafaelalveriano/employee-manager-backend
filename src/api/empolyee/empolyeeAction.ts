import { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import {
    listEmpolyee,
    storeEmpolyee,
    removeEmpolyee,
    updateEmpolyee,
} from './empolyeeRepository'

import Error from '../../common/error'
import { EmpolyeeType } from './empolyeeType'

export const list = async (req: Request, res: Response) => {
    try {
        return res.send(await listEmpolyee())
    } catch (error) {
        return Error(res).error500('Error ao listar os dados')
    }
}

export const store = async (req: Request, res: Response) => {
    const data = { id: uuidv4(), ...req.body }
    try {
        await storeEmpolyee(data)
        res.send(data)
    } catch (err) {
        return Error(res).error500('Error ao registrar os dados')
    }
}

export const update = async (req: Request, res: Response) => {
    const { id } = req.params
    const data: EmpolyeeType = req.body

    try {
        await updateEmpolyee(data, id)

        res.send().status(200)
    } catch (error) {
        return Error(res).error500('Error editar os dados')
    }
}

export const remove = async (req: Request, res: Response) => {
    const ids: [] = req.body

    try {
        await removeEmpolyee(ids)
        res.send().status(200)
    } catch (error) {
        return Error(res).error500('Error deletar os dados')
    }
}
