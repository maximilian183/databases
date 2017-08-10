var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {

      models.messages.get((results)=>{
        console.log("Controllers: ", results);
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        res.send({results: results});
      });
    },
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('body', req.body);
      models.messages.post(req.body);
      res.sendStatus(201);
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

