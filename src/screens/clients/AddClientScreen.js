import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import Header from '../../components/common/Header';
import Button from '../../components/common/Button';
import { addClient } from '../../redux/actions/clientActions';

const AddClientScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();

  const handleAddClient = () => {
    dispatch(addClient({ name, phone }));
  };

  return React.createElement(
    View,
    { style: styles.container },
    React.createElement(Header, { title: "Ajouter un Client" }),
    React.createElement(TextInput, {
      style: styles.input,
      placeholder: "Nom",
      value: name,
      onChangeText: setName
    }),
    React.createElement(TextInput, {
      style: styles.input,
      placeholder: "Téléphone",
      value: phone,
      onChangeText: setPhone
    }),
    React.createElement(Button, { title: "Ajouter", onPress: handleAddClient })
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default AddClientScreen;
