import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../api';

chai.use(chaiHttp);

const { expect } = chai;

const url = '/';

describe('Test for base api base url', () => {
  it('should return a status code of 200', (done) => {
    chai.request(app)
      .get(url)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
});
