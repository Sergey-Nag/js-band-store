import QueryApi from '../../service/QueryApi';
import { AUTH_USER, AUTH_USER_ERROR } from '../types/userTypes';

const query = QueryApi.getInstance();

const signin = (username) => async (dispatch) => {
  const req = await query.signin(username);
  let type = AUTH_USER;

  if (!req.ok) {
    type = AUTH_USER_ERROR;
  }

  dispatch({
    type,
    payload: req.data,
  });
  query.setToken(req.token);
};

export default signin;
