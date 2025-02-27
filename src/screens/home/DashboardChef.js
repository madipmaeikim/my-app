import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/common/Header';

const DashboardChef = () => {
  const clients = useSelector(state => state.clients);
  const agents = useSelector(state => state.agents);

  const renderClient = ({ item }) => {
    return React.createElement(
      View,
      { style: styles.tableRow },
      React.createElement(Text, { style: styles.tableCell }, item.name),
      React.createElement(Text, { style: styles.tableCell }, item.phone),
      React.createElement(Text, { style: styles.tableCell }, item.confirmed ? 'Oui' : 'Non')
    );
  };

  const renderAgent = ({ item }) => {
    return React.createElement(
      View,
      { style: styles.tableRow },
      React.createElement(Text, { style: styles.statsCell }, item.name),
      React.createElement(Text, { style: styles.statsCell }, item.collected),
      React.createElement(Text, { style: styles.statsCell }, item.confirmed)
    );
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Tableau de bord Chef" }),
    React.createElement(
      View,
      { style: styles.tableContainer },
      React.createElement(
        View,
        { style: styles.tableHeader },
        React.createElement(Text, { style: styles.tableHeaderCell }, "Nom"),
        React.createElement(Text, { style: styles.tableHeaderCell }, "Téléphone"),
        React.createElement(Text, { style: styles.tableHeaderCell }, "Confirmé")
      ),
      React.createElement(FlatList, {
        data: clients,
        renderItem: renderClient,
        keyExtractor: item => item.id,
        ListEmptyComponent: React.createElement(Text, { style: styles.noData }, "Aucun client collecté")
      })
    ),
    React.createElement(
      View,
      { style: styles.tableContainer },
      React.createElement(
        View,
        { style: styles.tableHeader },
        React.createElement(Text, { style: styles.tableHeaderCell }, "Nom"),
        React.createElement(Text, { style: styles.tableHeaderCell }, "Collecté"),
        React.createElement(Text, { style: styles.tableHeaderCell }, "Confirmé")
      ),
      React.createElement(FlatList, {
        data: agents,
        renderItem: renderAgent,
        keyExtractor: item => item.id,
        ListEmptyComponent: React.createElement(Text, { style: styles.noData }, "Aucun agent trouvé")
      })
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  tableContainer: {
    flex: 1,
    marginBottom: 20,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    paddingBottom: 10,
    marginBottom: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  tableCell: {
    flex: 1,
  },
  statsCell: {
    flex: 1,
  },
  noData: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#AAA',
  },
});

export default DashboardChef;
