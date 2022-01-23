const express = require('express');
const app = express();
const ejs = require('ejs');
const PORT = process.env.PORT || 5000
//Controllers
const porfolioController = require('./controllers/portfolioControler')
const adminController = require('./controllers/adminController')

app.use("/assets", express.static('public'));
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.use(express.json())

app.get('/portfolio', porfolioController.GET);
app.post('/portfolio', porfolioController.POST);

app.get('/admin', adminController.GET);

app.listen(PORT, () => {
  console.log(PORT);
})