//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const deleteAlreadyDownTodo = async (ids) => {
  const token = Cookies.get('token');
  let APIs = ids.map((id) => 'https://todoo.5xcamp.us/todos/' + id);

  Promise.all(
    APIs.map(async (url) => {
      return await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
    })
  ).then((response) => {
    console.log(response);
  });
};

export default deleteAlreadyDownTodo;
