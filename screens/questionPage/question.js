import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { connect } from 'react-redux';
import moment from 'moment';


class Question extends React.Component {

  render() {
    
    const { question } = this.props 
    const lastActivetyDate = moment(question[0].last_activity_date * 1000).format('YYYYMMDD');
    return(
      <View style = {styles.container}>
        <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
          <UserInfo user = {question[0].owner} date = {moment(lastActivetyDate).fromNow()} />
          <View style = {styles.reputation}><Text>{question[0].owner.reputation}</Text></View>
        </View>
        <View style = {{minHeight: 400}}>
          <Text style = {styles.title}>{question[0].title}</Text>
          { question ? (
              <WebView source={{html: '' + question[0].body}}
              style={{flex: 1, fontSize: 15}}
              /> 
            ) : (<Text>wait</Text>)
          }
        </View>
        <Tags tags = {question[0].tags }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgb(51,43,80)',
  },
  container: {
    minHeight: 500,
    width: '90%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  reputation: {
    borderWidth: 1,
    padding: 10,
    paddingTop: 0,
    margin: 5,
    height: 25,
    borderColor: 'green',
    borderRadius: 10,
    alignItems: 'flex-end'
  },
  title: {
    color: 'rgb(65,144,255)',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

const mapStateToProps = state => {
  return{
    question: state.questionPageReducer.question,
  };
};

export default connect(mapStateToProps)(Question);