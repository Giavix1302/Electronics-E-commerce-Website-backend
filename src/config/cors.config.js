import cors from 'cors'

const ENV = process.env.NODE_ENV || 'development'

const corsOptions = {
  origin: '*', // default
}

// Tuỳ biến theo môi trường
if (ENV === 'production') {
  corsOptions.origin = []
  corsOptions.methods = ['GET', 'POST', 'PUT', 'DELETE']
} else if (ENV === 'development') {
  corsOptions.origin = '*'
  corsOptions.methods = ['GET', 'POST', 'PUT', 'DELETE']
}

export default cors(corsOptions)