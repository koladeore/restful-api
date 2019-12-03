import Sequelize from 'sequelize';
import model from '../database/models';
import redisHelper from '../helpers/redisHelper';

const { Op } = Sequelize;
const { Book } = model;
const {
  getAsync,
  existsAsync,
  setAsync
} = redisHelper;
const setBookToCache = async (findBook, search = '') => {
  if (search !== '') {
    await setAsync(`book_${search}`, 5,JSON.stringify(findBook));
  } else {
    await setAsync('book', 5,JSON.stringify(findBook));
  }
};
const getBookFromCache = async () => {
  const checkBookRedis = await existsAsync('book');
  if (checkBookRedis) {
    const getBookRedis = await getAsync('book');
    return JSON.parse(getBookRedis);
  }
  return undefined;
};

const getSearchBookFromCache = async (search) => {
  const checkBookRedis = await existsAsync(`book_${search}`);
  if (checkBookRedis) {
    const getBookRedis = await getAsync(`book_${search}`);
    return JSON.parse(getBookRedis);
  }
  return undefined;
};

const findAllBook = async (search = '') => {
  let findBook = '';
  if (search === '') {
    getBookFromCache();
    findBook = await Book.findAll();
  }
  if (search !== '') {
    getSearchBookFromCache(search);
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

  if (findBook) {
    setBookToCache(findBook, search);
  }
  return findBook;
};
export default findAllBook;
