const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render('../views/admin/index')
})

router.get('/posts',(req, res) => {
    res.send("Pagina de Posts!")
})
router.get('/categorias',(req, res) => {
    res.render("../views/admin/categorias")
})
router.get('/categorias/add',(req, res) => {
    res.render("../views/admin/addcategoria")
})
module.exports = router