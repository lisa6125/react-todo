//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const logOutUser = async (form) => {
  return await axios.delete('https://todoo.5xcamp.us/users/sign_out', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: Cookies.get('token'),
    },
  });
};

export default logOutUser;
