const db = require('../db');

exports.createUser = (name, email, password) => {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, password], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

