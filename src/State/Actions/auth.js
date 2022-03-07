export const login = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'login',
      payload: data
    });
  }
}

export const register = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'register',
      payload: data
    });
  }
}

export const profile = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'profile',
      payload: data
    });
  }
}