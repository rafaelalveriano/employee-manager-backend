import { Request, Response } from 'express'

import Error from '../../common/error'

export const list = async (req: Request, res: Response) => {
    res.send('')
}

export const store = async (req: Request, res: Response) => {
    res.send('')
}

export const update = async (req: Request, res: Response) => {
    res.status(200).send()
}

export const remove = async (req: Request, res: Response) => {
    res.status(200).send()
}
