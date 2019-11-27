import Sequelize from 'sequelize';
import model from '../database/models';

const { Op } = Sequelize;
const { Book } = model;

const findAllBook = async (search = '') => {
  let findBook = await Book.findAll();
  if (search !== '') {
    findBook = await Book.findAll({
      where: {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${search}%`
            }
          },
          {
            author: {
              [Op.like]: `%${search}%`
            }
          }
        ]
      }
    });
  }
  return findBook;
};
export default findAllBook;
