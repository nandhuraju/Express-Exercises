const express = require('express');
const app = express();
const port = 3006;

app.use(express.json());


app.post('/submit-review', (req, res) => {
  const { bookTitle, bookReview } = req.body;
 
  if (!bookTitle || !bookReview) {
    return res.status(400).send('Book title and review content are required.');
    
  }


  console.log('Review submitted:', { bookTitle, bookReview});

  
  res.status(201).send(`Review for "${bookTitle}" submitted successfully!`);   //success response
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

