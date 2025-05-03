import express from 'express'
import cors from 'cors'
import routesFans from './routes/fan'


const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.use("/fan", routesFans)


app.get('/', (req, res) => {
  res.send('API: know-your-fan')
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})