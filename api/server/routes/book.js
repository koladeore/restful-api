import express from 'express';
import Books from '../controller/book';
import middlewares from '../middlewares';

const BOOK_URL = '/books';

const { BookValidator: { bookValidator }, verifyToken } = middlewares;

const book = express.Router();

book.post(`${BOOK_URL}/user`, verifyToken, bookValidator, Books.create);
book.get(`${BOOK_URL}`, Books.list);
book.get(`${BOOK_URL}/user`, verifyToken, Books.userBook);
book.patch(`${BOOK_URL}/:bookId`, verifyToken, Books.modify);
book.delete(`${BOOK_URL}/:bookId`, verifyToken, Books.delete);

export default book;
