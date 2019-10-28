import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mockData from './mockData';
import app from '../api';

const API_VERSION = '/api/v1';

const { bookMock: { bookData, bookUser, bookUpdate } } = mockData;

const SIGNUP = `${API_VERSION}/api/users/signup`;
const CREATE_BOOK = `${API_VERSION}/api/books/1/books`;
const UPDATE_BOOK = `${API_VERSION}/api/books/1`;
const DELETE_BOOK = `${API_VERSION}/api/books/1`;
chai.use(chaiHttp);


describe('book for Users ', () => {
  before((done) => {
    chai.request(app)
      .post(SIGNUP)
      .send(bookUser)
      .end((error, response) => {
        expect(response.body).to.have.property('message,success,data');
        done();
      });
  });
  describe('Create a book for USER', () => {
    it('should create a new book', (done) => {
      chai.request(app)
        .post(CREATE_BOOK)
        .send(bookData)
        .end((error, response) => {
          expect(response).to.have.status('201');
          expect(response.body).to.be.an('object');
          expect(response.body.book).to.have.property('title');
          expect(response.body.book).to.have.property('author');
          expect(response.body.book).to.have.property('description');
          expect(response.body.book).to.have.property('quantity');
          done();
        });
    });
  });
  describe('Update a book for USER', () => {
    it('should update a book for a user', (done) => {
      chai.request(app)
        .patch(UPDATE_BOOK)
        .send(bookUpdate)
        .end((error, response) => {
          expect(response).to.have.status('200');
          expect(response.body).to.be.an('object');
          expect(response.body.data).to.have.property('title');
          expect(response.body.data).to.have.property('author');
          expect(response.body.data).to.have.property('description');
          expect(response.body.data).to.have.property('quantity');
          done();
        });
    });
  });
  describe('Delete a book for USER', () => {
    it('should delete a book for a user', (done) => {
      chai.request(app)
        .delete(DELETE_BOOK)
        .end((error, response) => {
          expect(response).to.have.status('200');
          expect(response.body.message).eql('Book successfully deleted');
          done();
        });
    });
  });
});
