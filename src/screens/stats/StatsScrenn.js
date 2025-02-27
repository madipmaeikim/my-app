import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';

const StatsScreen = () => {
  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Statistiques" }),
    React.createElement(Text, { style: styles.text }, "Statistiques en temps réel à venir...")
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default StatsScreen;
