const path = require('path');

const express =  require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const app = express();

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs'); // 设置模板引擎
app.set('views', 'views'); 

// const adminRoutes = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', (req, res, next) => {
//     console.log('总是要通过我');
//     next();
// })
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);


app.listen(3000);