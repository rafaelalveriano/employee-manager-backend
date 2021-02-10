import { Express, Router } from 'express'
import { EmpolyeeRoute } from '../api/empolyee'

export default (app: Express, router: Router) => {
    const apiV1 = '/api/'
    app.use(apiV1, EmpolyeeRoute(router))
}
