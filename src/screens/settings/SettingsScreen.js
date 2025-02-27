import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import { logout } from '../../redux/actions/authActions';

const SettingsScreen = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Navigation vers l'écran de connexion
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Paramètres" }),
    React.createElement(Button, { title: "Déconnexion", onPress: handleLogout })
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default SettingsScreen;
