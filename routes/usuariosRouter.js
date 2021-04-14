const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get('/', usuariosController.index);
router.post('/', usuariosController.create);
router.put('/:id', usuariosController.update);
router.delete('/:usuarios_id', usuariosController.delete);

module.exports = router;
