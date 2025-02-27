
export const fetchStats = () => async dispatch => {
  try {
    const statsSnapshot = await firebase.firestore().collection('stats').get();
    const stats = statsSnapshot.docs.map(doc => doc.data());
    dispatch({ type: 'FETCH_STATS_SUCCESS', payload: stats });
  } catch (error) {
    console.error('Erreur lors de la récupération des statistiques:', error);
  }
};
