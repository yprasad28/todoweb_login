import axios from 'axios';

// const SERVER_URL ='http://localhost:5000/api';

const registerUser = async (data) => {
    e.preventDefault();
    return await axios.post('http://localhost:5000/api/register', data);
}

const loginUser = async (data) => {
    return await axios.post('http://localhost:5000/api/login', data);
}

const AuthServices = {
    registerUser,
    loginUser
}

export default AuthServices;