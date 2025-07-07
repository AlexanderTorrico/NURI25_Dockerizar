const db = require('../config/db');

exports.getAll = (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};


exports.getById = (req, res) => {
  db.query('SELECT * FROM users WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length === 0) return res.status(404).json({ mensaje: 'No encontrado' });
    res.json(results[0]);
  });
};


exports.create = (req, res) => {
  const { nombre, edad } = req.body;
  db.query('INSERT INTO users (nombre, edad) VALUES (?, ?)', [nombre, edad], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, nombre, edad });
  });
};

exports.update = (req, res) => {
  const { nombre, edad } = req.body;
  db.query('UPDATE users SET nombre = ?, edad = ? WHERE id = ?', [nombre, edad, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Actualizado correctamente' });
  });
};

exports.delete = (req, res) => {
  db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Eliminado correctamente' });
  });
};
