//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const toggleTodo = async (id) => {
  let token = Cookies.get('token');
  let res;
  await axios
    .patch(
      `https://todoo.5xcamp.us/todos/${id}/toggle`,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      }
    )
    .then((response) => {
      res = response.data;
    });
  return res;
};

export default toggleTodo;
