import React from 'react'
import { Modal, Text, TextInput, Button, View, StyleSheet, Image, TouchableHighlight, Picker } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeTag, search, addTagAndSearch, changeFilterAndSearch } from '../modules/mainPage/action'
import Icon from 'react-native-vector-icons/FontAwesome';


class Header extends React.Component {

  state = {
    modalVisible: false,
    filter: this.props.filter,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  componentWillMount(){
    const { search } = this.props;
    search();
  }
  
  render() {

    const { tag, changeTag, addTagAndSearch, changeFilter } = this.props;
    return(
      <View style = {styles.container}>
        {/* TODO need create another component with modal */}
        <Modal
          animationType = 'slide'
          transparent = {false}
          visible = {this.state.modalVisible}
        >
          <View style = {styles.modal}>
            <Picker
              selectedValue={this.state.filter.order}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({filter: { ...this.state.filter, order: itemValue}})
              }>
              <Picker.Item style = {{width: 200, backgroundColor: 'red'}} label="desc" value="desc" />
              <Picker.Item label="asc" value="asc" />
            </Picker>
            <Picker
              selectedValue={this.state.filter.sort}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) => {
                console.log(itemValue)
                this.setState({filter: { ...this.state.filter, sort: itemValue}})
              }}>
              <Picker.Item label='activity' value='activity' />
              <Picker.Item label='votes' value='votes' />
              <Picker.Item label='creation' value='creation' />
            </Picker>
          </View>
          <View style = {styles.modal}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(!this.state.modalVisible);
                  changeFilter(this.state.filter);
                }}>
              <Text style = {styles.hideModalButton}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </Modal>
        <TextInput 
          style = {styles.inputer}
          placeholder = 'Seach Place'
          placeholderTextColor = 'white'
          onChangeText = {(event) => {
            changeTag(event);
          }}
          onSubmitEditing = {() =>{
            addTagAndSearch(tag);
          }}
        ></TextInput>
        <TouchableHighlight 
          style = {{justifyContent: 'center'}}
          onPress = {() => {
            this.setModalVisible(true)
        }}>
          <Icon 
            name = 'ellipsis-v' size = {30}
            style = {styles.button}
          />  
        </TouchableHighlight >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  picker: {
    justifyContent: 'center',
    paddingTop: 5,
    height: 50,
    width: 150,
    margin: 15,
  },
  hideModalButton: {
    padding: 7,
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 7,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'orange',
  },
  inputer: {
    borderWidth: 1,
    height: 30,
    width: 250,
    fontSize: 15,
    borderColor: '#000',
    color: '#000',
    margin: 5,
    marginLeft: 15,
    padding: 0,
    paddingLeft: 15,
    borderRadius: 15,
    backgroundColor: 'white'
  },
  button: {
    margin: 0,
    width: 40,
    justifyContent: 'center',

  }
});

const mapStateToProps = state => {
  return{
    tag: state.mainPageReducer.tag,
    filter: state.mainPageReducer.filter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeTag: bindActionCreators(changeTag, dispatch),
    search: bindActionCreators(search, dispatch),
    changeFilter: bindActionCreators(changeFilterAndSearch, dispatch),
    addTagAndSearch: bindActionCreators(addTagAndSearch, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);