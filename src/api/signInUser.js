//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const signInUser = async (form) => {
  return await axios.post('https://todoo.5xcamp.us/users/sign_in', form);
};

export default signInUser;
