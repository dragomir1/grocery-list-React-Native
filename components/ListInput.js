import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const ListInput = props => {
  const [addGroceryItem, setGroceryState] = useState('');

  const inputGroceryItemText = addGroceryItem => {
    setGroceryState(addGroceryItem);
  };

  const addGroceryItemtoList = () => {
    props.addingGroceryItemtoList(addGroceryItem);
    setGroceryState('');
  };

  return (
    <Modal visible={props.isModalVisible} animationType='slide'>
      <View style={styles.layout}>
        <TextInput
          style={styles.textInputStyle}
          placeholder='add grocery here'
          onChangeText={inputGroceryItemText}
          value={addGroceryItem}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='ADD' onPress={addGroceryItemtoList} />
          </View>
          <View style={styles.button}>
            <Button title='CANCEL' color='red' onPress={props.cancelItem} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInputStyle: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    width: '80%',
    marginBottom: 10
  }
});
export default ListInput;
