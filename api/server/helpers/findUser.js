import models from '../database/models';
import responseMessage from './responseMessage';

const { User } = models;

const findUser = async (param, response) => {
  try {
    const user = await User.findOne({
      where: { id: param },
    });
    if (!user) return responseMessage(response, 404, { message: 'user does not exist ' });
    return user;
  } catch (error) {
    return responseMessage(response, 500, { message: error.message });
  }
};

export default findUser;
