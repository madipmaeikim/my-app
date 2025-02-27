import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { editClient } from '../../redux/actions/clientActions';

const EditClientScreen = ({ route }) => {
  const { client } = route.params;
  const [name, setName] = useState(client.name);
  const [phone, setPhone] = useState(client.phone);
  const dispatch = useDispatch();

  const handleEditClient = () => {
    dispatch(editClient({ ...client, name, phone }));
  };

  return React.createElement(
    View,
    { style: styles.container },
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
    React.createElement(Button, { title: "Modifier", onPress: handleEditClient })
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

export default EditClientScreen;

