const responseMessage = async (response, statusCode, payload) => response.status(statusCode).json({
  ...payload,
});

export default responseMessage;
