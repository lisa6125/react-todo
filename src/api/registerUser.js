//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const registerUser = async (form) => {
  return await axios.post('https://todoo.5xcamp.us/users', form)
};

export default registerUser;
