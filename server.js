//Imports
const express = require('express')
const methodOverride = require('method-override')
const controllers = require('./controllers')

//Create instance
const app = express()
const router = express.Router()

//require for home
const db = require('./models')

//db connection
require('./config/db.connection')

const PORT = process.env.PORT

//App configs
app.set('view engine', 'ejs')

//Middleware
app.use(express.static('public'))

app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: false }))

//Controllers
app.use('/products', controllers.products)
app.use('/user', controllers.users)
app.use('/reviews', controllers.reviews)

//About Route
app.get('/about', (req, res) => res.render('about.ejs'))

//genre:/scifi
app.get('/genre/scifi', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
        const users= await db.User.find({})
        const reviews= await db.Review.find({})
        const context = { books, users,reviews }
        return res.render('genres/scifi.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})
//genre:/fantasy
app.get('/genre/fantasy', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
        const users= await db.User.find({})
        const reviews= await db.Review.find({})
        const context = { books, users,reviews }
        return res.render('genres/fantasy.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})
//genre:/graphic-novels
app.get('/genre/graphicNovel', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
        const users= await db.User.find({})
        const reviews= await db.Review.find({})
        const context = { books, users,reviews }
        return res.render('genres/graphicNovel.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})
//genre:/non-fiction
app.get('/genre/nonfiction', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
        const users= await db.User.find({})
        const reviews= await db.Review.find({})
        const context = { books, users,reviews }
        return res.render('genres/nonfiction.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})
//Home route
app.get('/', async (req, res, next) => {
    try {
        const books = await db.Product.find({})
        const users= await db.User.find({})
        const reviews= await db.Review.find({})
        const context = { books, users,reviews }
        return res.render('home.ejs', context)
    }catch (error) {
        console.log(error)
        req.error = error
        return next()
    }
})
module.exports = router

//Listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))