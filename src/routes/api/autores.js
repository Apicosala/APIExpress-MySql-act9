const router = require('express').Router();

const AutoresControllers = require('../../controllers/autores.controllers');

router.get('/', AutoresControllers.getAllAutores);
router.get('/:autorId', AutoresControllers.getAutoresById);
router.post('/', AutoresControllers.createAutor);
router.put('/:autorId', AutoresControllers.updateAutor);
router.delete('/:autorId', AutoresControllers.deleteAutor);


module.exports = router;