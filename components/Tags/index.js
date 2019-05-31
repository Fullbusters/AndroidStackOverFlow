import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


// return container with tags for displaying on the page
export default Tags = ({ tags = [], isDelete = false }) => (
  <View style = {styles.collections}>
    {tags.map((item, i) => <Text style = {styles.tag} key={i}>{item}</Text>)}
  </View>
)

const styles = StyleSheet.create({
  collections: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 5,
  },
  tag: {
    padding: 7,
    margin: 7,
    marginLeft: 0,
    borderRadius: 5,
    backgroundColor: 'red',
    color: 'rgb(255, 255, 255)',
  },
});