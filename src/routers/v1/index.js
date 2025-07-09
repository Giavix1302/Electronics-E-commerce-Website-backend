import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { accountRoute } from './account.route.js'
import { userRoute } from './user.route.js'

const Router = express.Router()

// Health check route
Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({
    message: 'API is running'
  })
})

Router.use('/accounts', accountRoute)

Router.use('/users', userRoute)

export const APIs_V1 = Router