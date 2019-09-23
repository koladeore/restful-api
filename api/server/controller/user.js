import model from '../database/models';
const { User } = model;

class Users {
    static async signUp(req,res) {
        try {
            const {name, username, email, password } =  req.body
            const findUser = await User.findOne({where:{email}});
            if(findUser){
                return res.status(409).json({
                    message: "Mail exists"
                });
            }           
            const newUser = await User.create({ name, username, email, password });
            return res.status(200).json({
                success: true,
                message: 'User successfully created',
                data: newUser
            });
        }
        catch (error) {
            return response.status(500).send({ status: 500, message: error });
        }
    }
    static async signIn(req,res) {
        try {
            const {email, password } =  req.body
            const finduser =  await User.findOne({ where: {email, password} })
            if(finduser){
                return res.status(200).json({success: true, message:'User successfully login',data: finduser})
            }
            return res.status(400).json({
                message: 'wrong email address'
            })
        }
        catch (error) {
            return response.status(500).send({ status: error, message:'Server Error' });
        }
    }
}

export default Users;
