import firebase from '../../config/firebaseConfig'; // Assurez-vous que ce fichier existe

export const addClient = (client) => {
  return async (dispatch) => {
    try {
      await firebase.firestore().collection('clients').add(client);
      dispatch({ type: 'ADD_CLIENT', payload: client });
    } catch (error) {
      console.error('Error adding client: ', error);
    }
  };
};
