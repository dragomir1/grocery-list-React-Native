import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import ListInput from './components/ListInput';
import ListItem from './components/ListItem';

export default function App() {
  // manages text inputs

  // manages array of grocery list
  const [groceryList, setGroceryListState] = useState([]);

  const [currentModal, setModalState] = useState(false);

  const addItemToListArray = addGroceryItem => {
    setGroceryListState(currentElements => [
      ...currentElements,
      addGroceryItem
    ]);
    setModalState(false);
  };

  const deleteGroceryItemHandler = element => {
    setGroceryListState(currentGroceryList =>
      currentGroceryList.filter(el => {
        return el !== element;
      })
    );
  };

  const cancelItemHandler = () => {
    setModalState(false);
  };

  return (
    <View style={styles.container}>
      <Button title='Add new item' onPress={() => setModalState(true)} />
      <ListInput
        addingGroceryItemtoList={addItemToListArray}
        isModalVisible={currentModal}
        cancelItem={cancelItemHandler}
      />
      <View>
        {groceryList.map(element => (
          <ListItem
            groceryItem={element}
            key={element}
            onDeleteGroceryItem={deleteGroceryItemHandler.bind(this, element)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 100
    // flex: 1,
    // // marginTop: 40,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center'
  }
});
