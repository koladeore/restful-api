import responseMessage from './responseMessage';

export default (request, response, next) => {
  const { body } = request;
  if (!Object.keys(body).length) {
    responseMessage(response, 400, { error: 'empty request body' });
  } else {
    next();
  }
};
