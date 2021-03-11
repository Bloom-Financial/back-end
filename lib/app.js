const express = require('express');
const app = express();
const request = require('superagent');

app.use(
  require('cors')({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use('/api/v1/auth', require('./controllers/users'));
app.get('/news', async (req, res) => {
  try {
    const newsData = await request.get(
      `https://newsapi.org/v2/everything?q=${req.query.q}&language=en&pageSize=50&apiKey=${process.env.NEWS_API_KEY}`
    );

    res.json(newsData);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use('/user', require('./controllers/createUser'));
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
