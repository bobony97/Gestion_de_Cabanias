const db = require('mysql2');
const connection = db.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cabanias",
  ssl: {
    rejectUnauthorized: false,
  },
  timezone: "UTC"
});

module.exports.getAllCabin = function (callback) {
  if (connection) {
    connection.query("SELECT * FROM cabania", (error, result) => {
      if (error) {
        throw error;
      } else {
        callback(result);
      }
    });
  }
};

module.exports.updateCabin = function (id, dataCabin, callback) {
  if (connection) {
    connection.query(
      "UPDATE cabania SET ? WHERE id= ?",
      [dataCabin, id],
      (error, result) => {
        if (error) {
          callback(error);
        } else {
          callback(null, result);
        }
      }
    );
  }
};

module.exports.emptyCabin = function (id, dataCabin, callback) {
  if (connection) {
    connection.query(
      "UPDATE cabania SET ? WHERE id= ?",
      [dataCabin, id],
      (error, result) => {
        if (error) {
          callback(error);
        } else {
          callback(result);
        }
      }
    );
  }
};

/*//////////////////////////////////////////////////////////////////////////////////////// */

/////////////////////PROXIMOS EVENTOS//////////////////

module.exports.getAllTask = function (callback) {
  if (connection) {
    connection.query("SELECT * FROM entradas", (error, result) => {
      if (error) {
        throw error;
      } else {
        callback(result);
      }
    });
  }
};

module.exports.addTask = function (dataTask, callback) {
  if (connection) {
    connection.query(
      "INSERT INTO entradas SET ?",
      dataTask,
      (error, result) => {
        if (error) {
          callback(error);
        } else {
          callback(result);
        }
      }
    );
  }
};

module.exports.deleteTask = function (id, callback) {
  if (connection) {
    connection.query("DELETE FROM entradas WHERE id= ?", id, (err, result) => {
      if (err) {
        throw err;
      } else {
        callback(id);
      }
    });
  }
};

module.exports.editTask = function (id, dataTask, callback) {
  if (connection) {
    connection.query(
      "UPDATE entradas SET ? WHERE id= ?",
      [dataTask, id],
      (error, result) => {
        if (error) {
          callback(error);
        } else {
          callback(result);
        }
      }
    );
  }
};
