const express = require('express');
const app = express();
app.use(express.json())
const port = 3002;



app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send(`Welcome,user with ID: ${userId}`);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });


  