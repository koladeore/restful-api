import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import mockData from './mockData';
import app from '../api';

const API_VERSION = '/api/v1';
const SIGN_UP = `${API_VERSION}/api/users/signup`;
const SIGN_IN = `${API_VERSION}/api/users/signin`;

const { userMock: { getUser, signUser } } = mockData;

chai.use(chaiHttp);


describe('TEST User', () => {
  describe('SIGN UP USER', () => {
    it('should signup a newUser', (done) => {
      chai.request(app)
        .post(SIGN_UP)
        .send(getUser)
        .end((error, response) => {
          console.log(response.body);
          expect(response).to.have.status('201');
          expect(response.body).to.be.an('object');
          expect(response.body).to.haveOwnProperty('data');
          done();
        });
    });
  });
  describe('SIGN IN USER', () => {
    it('should sign in  a User', (done) => {
      chai.request(app)
        .post(SIGN_IN)
        .send(signUser)
        .end((error, response) => {
          expect(response).to.have.status('200');
          expect(response.body).to.be.an('object');
          expect(response.body).to.haveOwnProperty('data');
          done();
        });
    });
  });
});
