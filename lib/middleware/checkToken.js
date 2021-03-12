const fetch = require('node-fetch');

const accessToken = async ({ code }, req, res, next) => {
  return await fetch('https://api.alpaca.markets/oauth/token', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded ' },
    body: `grant_type=authorization_code&code=${code}&client_id=edb6dea4ea1d646cd3bb3f82667f33df&client_secret=b538418ea291b2bcbb7219b5ef78724fa79cc99f&redirect_uri=http://bloom-financial.netlify.app/home
    `,
  })
    .then((res) => res.json())
    .then(({ accessToken }) => res.send({ accessToken }))
    .catch(next);
};

export default accessToken;
