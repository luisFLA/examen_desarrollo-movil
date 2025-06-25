const db = require('../conexion/db');

const Producto = {
  getAll: (callback) => {
    db.query('SELECT * FROM productos', callback);
  },

  create: (data, callback) => {
    const sql = `INSERT INTO productos (nombre, descripcion, precio, estado, categoria, foto)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [data.nombre, data.descripcion, data.precio, data.estado, data.categoria, data.foto];
    db.query(sql, values, callback);
  },

  deleteById: (id, callback) => {
    db.query('DELETE FROM productos WHERE id = ?', [id], callback);
  }
};

module.exports = Producto;
