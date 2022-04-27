const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const port = process.env.port || 2000

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use(express.static(__dirname + '/assets'))
app.set('views', path.join(__dirname, 'views'))

router.get('/', function (req, res) {
  res.render('home')
})

app.use('/', router)

app.use(function (req, res) {
  res.status(404).render('home')
})

app.listen(port, () => {
  console.log(`Server running on port: ${port}`)
})
