import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return React.createElement(
    View,
    { style: styles.header },
    React.createElement(Text, { style: styles.headerTitle }, title)
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007BFF',
    padding: 15,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Header;
