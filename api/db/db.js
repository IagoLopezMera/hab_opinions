const mysql = require('mysql2/promise');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE } = process.env;

let pool;

const getConnection = async () => {
  if (!pool) {
    pool = mysql.createPool({
      connectionLimit: 10,
      host: MYSQL_HOST,
      user: MYSQL_USER,
      password: MYSQL_PASSWORD,
      database: MYSQL_DATABASE,
      timezone: 'Z',
      //https://sauldelgado.net/campos-bit-en-mysql-desde-node-js/
      typeCast: function castField(field, useDefaultTypeCasting) {
        if (field.type === 'BIT' && field.length === 1) {
          const bytes = field.buffer();
          return bytes[0] === 1;
        }
        return useDefaultTypeCasting();
      },
    });
  }

  return await pool.getConnection();
};

module.exports = {
  getConnection,
};
