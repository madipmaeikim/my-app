import { firebase } from '../../config/firebaseConfig';
// Action for resetting password
export const resetPassword = (email) => async dispatch => {
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    dispatch({ type: 'RESET_PASSWORD_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'RESET_PASSWORD_ERROR', payload: error.message });
  }
};


// Action pour la connexion
export const login = (email, password) => async dispatch => {
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: 'LOGIN_SUCCESS', payload: userCredential.user });
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', payload: error.message });
  }
};

// Action pour l'inscription
export const register = (email, password) => async dispatch => {
  try {
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    dispatch({ type: 'REGISTER_SUCCESS', payload: userCredential.user });
  } catch (error) {
    dispatch({ type: 'REGISTER_ERROR', payload: error.message });
  }
};

// Action pour la déconnexion
export const logout = () => async dispatch => {
  try {
    await firebase.auth().signOut();
    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    dispatch({ type: 'LOGOUT_ERROR', payload: error.message });
  }
};
