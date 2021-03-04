const { Router } = require('express');
const User = require('../models/User');
const authServices = require('../auth/auth-service');


const attachCookie = (res, user) => {
  res.cookie('session', authServices.authToken(user), {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: 'none',
    secure: true
  })
}

module.exports = Router()
 
  .get('https://app.alpaca.markets/oauth/authorize?response_type=code&client_id=edb6dea4ea1d646cd3bb3f82667f33df&redirect_uri=http://localhost:7891&scope=%20trading', (req, res, next) => {







    // User
    //   .findByEmail(req.user)
    //   .then(user => res.send(user))
    //   .catch(next);
    
  })

  .post('/token', (req, res, next) => {
    const {code} = req.body,
      
    fetch('https://api.alpaca.markets/oauth/token',  {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded ' },
    body: `grant_type=authorization_code&code=${code}&client_id=edb6dea4ea1d646cd3bb3f82667f33df&client_secret=b538418ea291b2bcbb7219b5ef78724fa79cc99f&redirect_uri=http://localhost:7891`
    })
      .then(res => res.json())
      .then(({ access_token}) => res.send({accessToken : access_token})
      .catch(next));

  

})