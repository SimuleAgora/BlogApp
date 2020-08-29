// Carregando Modulos
const express = require ('express')
const handlebars = require ('express-handlebars')
const bodyParser = require ('body-parser')
const app = express()
// const mongoose = require ('mongoose')
const admin = require("./routes/admin")
const path = require("path")
//-------------------------------------
//       CONFIGURAÇOES
//-------------------------------------s
////-----------BodyParser--------------
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
////-----------Handlebars--------------
app.engine('handlebars',handlebars({defaultlayout:'main'}))
app.set('view engine','handlebars')
////-----------Mongoose----------------

//-------------Public------------------
app.use(express.static('public'));
//--------------ROTAS -----------------
app.use('/admin',admin)

//---------OUTROS ---------------------

//---------Porta de Exibição-----------
const PORT = 8081
app.listen(PORT, () => {
    console.log ("*-------------------*")
    console.log ("  Servidor Rodando! ")
    console.log ("*-------------------*")
})