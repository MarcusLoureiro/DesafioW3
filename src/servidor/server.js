// config inicial
const { response } = require('express')
const express = require('express')
const app = express()

// depois do db
const mongoose = require('mongoose')

//forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

//rota inical /endpoint	
app.get('/', (req, res) => {
    //mostrar req

    res.json({ message: 'Oi Express!' })
})


//entregar uma porta
const DB_USER =  'marcus'
const DB_PASSWORD = encodeURIComponent('MyD9C4lB8VVzMC1c')
mongoose.connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.dedsa1f.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log('Conectamos ao MongoDB')
        app.listen(3000)
    })
    .catch((err)=>console.log(err))

