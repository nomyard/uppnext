import './actions';

const reducers = store => next => async action => {
  next(action);
  const state = store.getState();
  switch (action.type) {
    case API_GET_AUTH_LOGOUT:
      store.dispatch({ type: API_GET_AUTH_LOGOUT_SENT });
      axios
      .get(`${API_HOST}/logout`, {
        headers: { Authorization: state.authStore.token }
      })
      .then(response => {
        store.dispatch(push('/login'));
        next({
          type: API_GET_AUTH_LOGOUT_SUCCESS
        });
      })
      .catch(error => {
        next({ type: API_GET_AUTH_LOGOUT_ERROR });
      });
    break;
    case API_GET_CONFIRM_TOKEN:
    axios
    .get(`${API_HOST}/confirm`, {
      headers: { Authorization: state.authStore.token }
    })
    .then(response =>
      next({
        type: API_GET_CONFIRM_TOKEN_SUCCESS,
        payload: response
      })
    )
    .catch(error =>
      next({
        type: API_GET_CONFIRM_TOKEN_ERROR,
        payload: error
      })
    );
  break;
  case API_GET_USER_DATA:
  axios
    .get(`${API_HOST}/user/current`, {
      headers: { Authorization: state.authStore.token }
    })
    .then(response =>
      next({
        type: API_GET_USER_DATA_SUCCESS,
        payload: response
      })
    )
    .catch(error =>
      next({
        type: API_GET_USER_DATA_ERROR,
        payload: error
      })
    );
  break;
  case API_POST_AUTH_REGISTER:
  axios
    .post(`${API_HOST}/signup`, action.payload)
      .then(response => {
      next({
        type: API_POST_AUTH_REGISTER_SUCCESS,
        payload: response
      });
      store.dispatch(push('/'));
    })
    .catch(error => {
      next({ type: API_POST_AUTH_REGISTER_ERROR, payload: error });
    });
  break;
  case API_POST_AUTH_LOGIN:
      try {
        store.dispatch({ type: API_POST_AUTH_LOGIN_SENT });
        const response = await axios.post(
          `${API_HOST}/login`,
          action.payload
        );
        next({ type: API_POST_AUTH_LOGIN_SUCCESS, payload: response });
        store.dispatch(push('/'));
      } catch (error) {
        next({ type: API_POST_AUTH_LOGIN_ERROR, payload: error });
      }
      break;
    default:
      break;
  }
}

export default reducers;