import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
const port = 5000;


app.use(bodyParser.json());


app.post('/getSentiment', (req, res) => {
  const { data } = req.body;
  console.log('Data from frontend:', data);
 
  let sentimentLabel;
  if (data.toLowerCase().includes('good')) {
    sentimentLabel = 'Positive';
  } else {
    sentimentLabel = 'Negative';
  }

  res.send({ message: sentimentLabel });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
