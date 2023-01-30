import express from 'express'
import { MeliData } from './services/meli.js'
const app = express()
const meliData = new MeliData()
app.use(express.json())

app.get('/meli/:id', async (req, res) => {
  const {id} = req.params
  const data = await meliData.getPropertyInfo(id)
  
  res.json(data)
})

app.listen(3000, () => console.log('Funcionando en el puerto 3000'))