import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Accueil" }),
    React.createElement(Text, { style: styles.welcomeText }, "Bienvenue sur Bauen!"),
    React.createElement(
      View,
      { style: styles.buttonContainer },
      React.createElement(Button, { title: "Home", onPress: () => handleNavigation('HomeScreen') }),
      React.createElement(Button, { title: "Ajouter un client", onPress: () => handleNavigation('AddClientScreen') }),
      React.createElement(Button, { title: "Liste des clients", onPress: () => handleNavigation('ClientListScreen') }),
      React.createElement(Button, { title: "Éditer un client", onPress: () => handleNavigation('EditClientScreen') }),
      React.createElement(Button, { title: "Tableau de bord agent", onPress: () => handleNavigation('DashboardAgent') }),
      React.createElement(Button, { title: "Tableau de bord chef", onPress: () => handleNavigation('DashboardChef') }),
      React.createElement(Button, { title: "Paramètres", onPress: () => handleNavigation('SettingsScreen') }),
      React.createElement(Button, { title: "Statistiques", onPress: () => handleNavigation('StatsScreen') })
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});

export default HomeScreen;