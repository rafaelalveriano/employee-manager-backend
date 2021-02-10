import { Express, Router } from 'express'
import { EmpolyeeRoute, ResponsabilityRoute } from '../api'

export default (app: Express, router: Router) => {
    const apiV1 = '/api/'
    app.use(apiV1, EmpolyeeRoute(router))
    app.use(apiV1, ResponsabilityRoute(router))
}
