import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  meliApiKey: process.env.MELI_API_KEY
}