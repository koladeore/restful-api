import model from '../database/models';
const { User } = model;

class Users {
    static signUp(req,res) {
        console.log('signup');
        try {
            const {name, username, email, password } =  req.body
            console.log(req.body);
            return User.create({ name, username, email, password })
            .then(userData => res.status(201).send({sucess: true, message:'User successfully created', userData}))
        }
        catch (error) {
            return response.status(500).send({ status: error, message:'Server Error' });
        }
    }
}

export default Users;
