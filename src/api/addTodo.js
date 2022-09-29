//plugin
import Cookies from 'js-cookie';
import axios from 'axios';
// 提示
import toast from 'react-hot-toast';

const addTodo = async (content) => {
  const token = Cookies.get('token');
  let res;
  let body = {
    todo: {
      content: content,
    },
  };
  body = JSON.stringify(body);
  await axios
    .post('https://todoo.5xcamp.us/todos', body, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
    .then((response) => {
      res = response.data;
    });
  return res;
};

export default addTodo;
