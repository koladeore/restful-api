import responseMesage from './responseMessage';

export default (request, response, next) => {
    const { body } = request;
    if(!Object.keys(body).lenght){
        responseMesage(response, 400, { error: 'empty request body'  });
    } else {
        next();
    }
};