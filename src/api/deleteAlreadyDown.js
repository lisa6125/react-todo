//plugin
import Cookies from 'js-cookie';
import axios from 'axios';

const deleteAlreadyDown = async (ids) => {
  let token = Cookies.get('token');
  let APIs = ids.map((id) => 'https://todoo.5xcamp.us/todos/' + id);

  Promise.all(
    APIs.map(async (url) => {
      await axios.delete(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });
    })
  );
};

export default deleteAlreadyDown;
