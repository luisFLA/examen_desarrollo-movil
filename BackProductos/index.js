const express = require('express');
const cors = require('cors');
const Producto = require('./backend-productos/Models/producto');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/productos', (req, res) => {
  Producto.getAll((err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.post('/productos', (req, res) => {
  const nuevoProducto = req.body;
  Producto.create(nuevoProducto, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ id: result.insertId, ...nuevoProducto });
  });
});

app.delete('/items/:id', (req, res) => {
  const id = req.params.id;
  Producto.deleteById(id, (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Producto eliminado con éxito' });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
