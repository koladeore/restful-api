import model from '../database/models';

const { Book } = model;

const findAllBook = async () => {
  const findBook = await Book.findAll();
  return findBook;
};
export default findAllBook;
