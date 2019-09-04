import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const ListItem = props => {
  return (
    <TouchableOpacity onPress={props.onDeleteGroceryItem}>
      <View style={styles.listStyle}>
        <Text>{props.groceryItem}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    padding: 10,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10
  }
});

export default ListItem;
