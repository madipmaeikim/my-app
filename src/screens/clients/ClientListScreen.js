import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';
import Card from '../../components/common/card';

const ClientListScreen = () => {
  const clients = useSelector(state => state.clients);

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Liste des Clients" }),
    React.createElement(FlatList, {
      data: clients,
      keyExtractor: item => item.id,
      renderItem: ({ item }) => React.createElement(Card, { title: item.name, content: item.phone })
    })
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default ClientListScreen;
