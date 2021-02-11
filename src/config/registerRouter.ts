import { Express, Router } from 'express'
import { EmployeeRoute, ResponsabilityRoute } from '../api'

export default (app: Express, router: Router) => {
    const apiV1 = '/api/'
    app.use(apiV1, EmployeeRoute(router))
    app.use(apiV1, ResponsabilityRoute(router))
}
