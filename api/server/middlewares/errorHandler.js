import { validationResult } from 'express-validator';

const validatorError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array();
    const errorMessage = [];

    errorsArray.forEach((error) => {
      errorMessage.push({
        field: error.param,
        message: error.msg,
      });
    });

    return res.status(400).send({
      errors: errorMessage,
    });
  }
  return next();
};

const paramsValidatorError = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const errorsArray = errors.array({ onlyFirstError: true });
    const errorMessage = errorsArray[0].msg;

    return res.status(400).send({
      error: errorMessage,
    });
  }
  return next();
};

export default { validatorError, paramsValidatorError };
