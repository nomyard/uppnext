import '../constants/actionTypes';

export const signUp = (email, password, firstName, lastName) => ({
  type: 'SIGN_UP',
  newUser: { email, password, firstName, lastName }
});

// export const editAdmin = (email, passowrd) => {   dispatch ({ type:
// EDIT_ADMIN, email, password }); } export const login = (email, password) => {
//   dispatch({ type: LOGIN, email, password }); } export const logout = () =>
// {   dispatch({ type: LOGOUT }); } export const signUp = () => { }