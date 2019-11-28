import model from '../database/models';
import cloudUpload from '../Services/configCloudinary';
import findAllBook from '../Services/bookServices';

const { Book } = model;

class Books {
  static async create(req, res) {
    try {
      const {
        title, author, description, quantity, imageName
      } = req.body;
      const { id } = req.userData;
      if (imageName) {
        await cloudUpload(imageName);
      }
      const bookCreate = await Book.create({
        title,
        author,
        description,
        quantity,
        imageName,
        userId: id
      });
      return res.status(201).json({
        message: `Your book with the title ${title} as been created successfully`,
        data: bookCreate
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error });
    }
  }

  static async list(req, res) {
    try {
      const { search } = req.query;
      const bookFind = await findAllBook(search);
      if (!bookFind) {
        if (search !== '') {
          return res.status(400).json({
            status: 400,
            message: 'book not found'
          });
        }
        return res.status(200).json({
          message: 'you do not have any book yet you can create'
        });
      }
      return res.status(200).json({
        status: 200,
        message: 'book found',
        data: bookFind
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error });
    }
  }

  static async modify(req, res) {
    try {
      const {
        title, author, description, quantity, imageName
      } = req.body;
      const { bookId } = req.params;
      const updateBook = await Book.update(
        {
          title,
          author,
          description,
          quantity,
          imageName
        },
        { returning: true, where: { id: bookId } }
      );
      return res.status(200).json({
        message: 'Book successfully updated',
        data: updateBook[1]
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error
      });
    }
  }

  static async userBook(req, res) {
    try {
      const { id } = req.userData;
      const searchBook = await Book.findAll({
        where: { userId: id }
      });
      if (!searchBook) {
        return res.status(200).json({
          message: 'you do not have any book yet you can create'
        });
      }
      return res.status(200).json({
        data: searchBook
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error
      });
    }
  }

  static async delete(req, res) {
    try {
      const { bookId } = req.params;
      const checkBook = await Book.findOne({
        where: { id: bookId }
      });
      if (!checkBook) {
        return res.status(400).json({ message: 'Book Not Found' });
      }
      await Book.destroy({
        where: { id: bookId }
      });
      return res.status(200).json({
        message: 'Book successfully deleted'
      });
    } catch (error) {
      return res.status(500).json({
        status: 500,
        message: error
      });
    }
  }
}
export default Books;
