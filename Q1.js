const express = require('express');
const app = express();
const port = 3002;


const Log = (req, res, next) => {
  console.log(`${req.method} request to ${req.url}`);
  next(); 
};


app.use(Log);


app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/products', (req, res) => {
  res.send('Products Page');
});

app.post('/checkout', (req, res) => {
  res.send('Checkout process');
});


app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});