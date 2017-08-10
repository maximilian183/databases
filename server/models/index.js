var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.dbConnection.query('SELECT m.message, u.username, m.createdAt, r.roomname FROM messages  m LEFT JOIN users u ON m.user_id=u.id LEFT JOIN rooms r ON m.room_id=r.id;', (err, result, fields) => {
        if (err) throw err;
        callback(result);
      });
    }, // a function which produces all the messages
    post: function (message) {
      // grab user_id
      var query_user = `SELECT * FROM users WHERE username = '${message.username}';`
      db.dbConnection.query( query_user , (err, result, fields) => {
        if (err) throw err;
        var user_id = result[0].id;
        var query = `INSERT INTO messages (message, createdAt, room_id, user_id)
              SELECT '${message.text}', NOW(), id, ${user_id} FROM rooms WHERE roomname = '${message.roomname}'`;
        db.dbConnection.query(query, (err, result, fields) => {
          if (err) throw err;
          console.log(result);
        });
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

