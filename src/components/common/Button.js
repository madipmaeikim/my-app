import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ onPress, title, disabled = false, testID }) => {
  const buttonStyle = [styles.button];
  if (disabled) {
    buttonStyle.push(styles.disabled);
  }
  return React.createElement(
    TouchableOpacity,
    {
      style: buttonStyle,
      onPress,
      disabled,
      accessible: true,
      accessibilityLabel: title,
      testID,
    },
    React.createElement(Text, { style: styles.text }, title)
  );
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  testID: PropTypes.string,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
