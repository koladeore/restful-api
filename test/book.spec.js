import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mockData from './mockData';
import app from '../api';

const API_VERSION = '/api/v1';
const bookId = 'd54d5aaa-f843-4cb1-b725-8cf6b9ea1a39';
const { bookMock: { bookData, bookUpdate, bookDelete } } = mockData;
const { userMock: { signUser } } = mockData;
const LOGIN = `${API_VERSION}/users/signin`;
const CREATE_BOOK = `${API_VERSION}/books/user`;
const UPDATE_BOOK = `${API_VERSION}/books/${bookId}`;
const DELETE_BOOK = `${API_VERSION}/books/${bookId}`;
let authToken;
chai.use(chaiHttp);

describe('book for Users ', () => {
  before((done) => {
    chai.request(app)
      .post(LOGIN)
      .send(signUser)
      .end((error, response) => {
        const { token } = response.body.data;
        authToken = token;
        done();
      });
  });
  describe('Create a book for USER', () => {
    it('should create a new book', (done) => {
      chai.request(app)
        .post(CREATE_BOOK)
        .set('authorization', authToken)
        .send(bookData)
        .end((error, response) => {
          // console.log(response);
          expect(response).to.have.status('201');
          expect(response.body).to.be.an('object');
          expect(response.body.data).to.have.property('title');
          expect(response.body.data).to.have.property('author');
          expect(response.body.data).to.have.property('description');
          expect(response.body.data).to.have.property('quantity');
          expect(response.body.data).to.have.property('imageName');
          done();
        });
    });
  });
  describe('Update a book for USER', () => {
    it('should update a book for a user', (done) => {
      chai.request(app)
        .patch(UPDATE_BOOK)
        .set('authorization', authToken)
        .send(bookUpdate)
        .end((error, response) => {
          expect(response).to.have.status('200');
          expect(response.body).to.be.an('object');
          expect(response.body.data[0]).to.have.property('title');
          expect(response.body.data[0]).to.have.property('author');
          expect(response.body.data[0]).to.have.property('description');
          expect(response.body.data[0]).to.have.property('quantity');
          expect(response.body.data[0]).to.have.property('imageName');
          done();
        });
    });
  });
  describe('Delete a book for USER', () => {
    it('should delete a book for a user', (done) => {
      chai.request(app)
        .delete(DELETE_BOOK)
        .set('authorization', authToken)
        .send(bookDelete)
        .end((error, response) => {
          expect(response).to.have.status('200');
          expect(response.body.message).eql('Book successfully deleted');
          done();
        });
    });
  });
});
