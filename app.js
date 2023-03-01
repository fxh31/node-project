const path = require('path');

const express =  require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.engine('ejs', require('ejs').__express);
app.set('view engine', 'ejs'); // 设置模板引擎
app.set('views', 'views'); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => { // 只有在传入请求的时候才会执行的中间件
  User.findById('63fd681fd9f318d46a9e3863')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
})
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    'mongodb+srv://fxh:KVWwJt80mLTzyXBY@cluster0.mnle1m2.mongodb.net/shop?retryWrites=true&w=majority'
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Jon',
          email: '232test@test.com',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });