//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const getTodoList = async () => {
  const token = Cookies.get('token');
  let res;
  await axios
    .get('https://todoo.5xcamp.us/todos', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
    .then((response) => {
      res = response.data.todos;
    });
  return res;
};

export default getTodoList;
