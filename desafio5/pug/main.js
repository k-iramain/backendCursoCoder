const express = require('express')
const Container = require('../../desafio4/container')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.set('views', './views')

app.set('view engine', 'pug')


let container = new Container();

app.get('/', (req, res) => {
    res.render('create')
})

app.post('/', function(req, res) {
    console.log(req.body)
    let product = container.create(
        req.body.title,
        req.body.price,
        req.body.image
    );
    res.redirect('/')
});

app.get('/products', (req, res) => {
    var data = {
        products: container.getAll()
    }
    res.render('list', data)
})


app.listen(8080)