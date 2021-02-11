import { Router } from 'express'
import { list, store, update, remove } from './action'
import Validator from './validator'
const route = '/empolyee/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    router.put(route, Validator, update)
    router.delete(route, remove)
    return router
}
