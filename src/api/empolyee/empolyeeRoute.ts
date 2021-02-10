import { Router } from 'express'
import { list, store, update, remove } from './empolyeeAction'
import Validator from './empolyeeValidator'
const route = '/empolyee/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    router.put(route, Validator, update)
    router.delete(route, remove)
    return router
}
