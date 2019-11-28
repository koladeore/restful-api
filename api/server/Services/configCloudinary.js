import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

const cloudUpload = async (fileUpload) => {
  cloudinary.v2.config = ({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });
  const file = await cloudinary.v2.uploader.upload(fileUpload);
  return file;
};

export default cloudUpload;
