import React from 'react';
import { StyleSheet, Text, View, Button, TextInput,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeAndSearchTag } from '../../modules/mainPage/action'
import { bindActionCreators } from 'redux';
import { Components }  from '../../components'


class Tag extends React.Component {
  
  render() {
    const { tag, removeAndSearchTag } = this.props;
    return (
      <View style = {styles.tagsContainer}>
        <View style = {styles.tag}><Text>{tag} </Text>
          <TouchableOpacity
            style = {styles.button}
            title = 'X' 
            onPress = {() => {
              removeAndSearchTag(tag);
            }}
          >
            <Text>X</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tagsContainer: {
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    height: 15,
    padding: 5,
    paddingTop: 0,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeAndSearchTag: bindActionCreators(removeAndSearchTag, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Tag);