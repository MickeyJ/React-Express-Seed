const testRequest = require('../controllers/test_request');

module.exports = (app) =>{

  app.get('/api/v1/test', testRequest);

  app.get('/*', (req, res, next) =>{
    res.sendFile('index.html', {
      root: './public/'
    });
  });

};