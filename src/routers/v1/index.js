import express from 'express'

const Router = express.Router()

Router.use('/accounts', accountRoute)

export const APIs_V1 = Router