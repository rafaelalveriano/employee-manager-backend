import { Router } from 'express'
import { list, store, update, remove } from './responsabilityAction'
import Validator from './responsabilityValidator'
const route = '/responsability/:id?'

export default (router: Router) => {
    router.get(route, list)
    router.post(route, Validator, store)
    router.put(route, Validator, update)
    router.delete(route, remove)
    return router
}
