const express = require('express');
const router = express.Router();
const booksCtrl = require('../controllers/api/books')

router.get('/books', booksCtrl.index)
router.get('/books/:id', booksCtrl.show)
router.post('/books',booksCtrl.create)
router.delete('/books/:id', booksCtrl.delete)
router.put('/books/:id', booksCtrl.update)

module.exports = router;
