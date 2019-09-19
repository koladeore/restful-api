import express from 'express';
import Books from '../controller/book';

const BASE_URL = '/api/users'
const BOOK_URL = '/api/books'

const book = express.Router();

book.post(`${BASE_URL}/:userId/books`, Books.create);
book.get(`${BOOK_URL}`, Books.list);
book.put(`${BOOK_URL}/:bookId`, Books.modify);
book.delete(`${BOOK_URL}/:bookId`, Books.delete);

export default book;
