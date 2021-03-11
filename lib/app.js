const express = require('express');
const app = express();

app.use(
  require('cors')({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.get('/news', async (req, res) => {
  try {
    const newsData = await newsData.get(`https://newsapi.org/v2/everything?q=${req.query.search}&
  language=en&
  pageSize=50&
  apiKey=${process.env.NEWS_API_KEY}`);

    res.json(newsData);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use('/api/v1/auth', require('./controllers/users'));
app.use('/user', require('./controllers/createUser'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
