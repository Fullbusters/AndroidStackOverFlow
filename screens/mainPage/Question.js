import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { Components }  from '../../components'
import { Actions } from 'react-native-router-flux';
import moment from 'moment';


export default class Question extends React.Component {

  render() {
    const { question }= this.props;
    const creationDate = moment(question.creation_date * 1000).format('MMM-DD, YYYY at hh:mm');
    return(
      <View style = {styles.question} 
        onTouchEnd = {() => Actions.questionPage({questionId: question.question_id})}
      >
        <UserInfo user = {question.owner} date = { creationDate } />
        <View>
          <Text style = {styles.title}>{question.title}</Text>
        </View>
        <Tags tags = {question.tags }/>
        <View style = {styles.footer}>
          <Text style = {styles.boldText}>{question.score}<Text style = {styles.text}> votes</Text></Text>
          <Text style = {styles.answers}>{question.answer_count} answers</Text>
          <Text style = {styles.boldText}>{question.view_count}<Text style = {styles.text}> views</Text></Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  question: {
    minHeight: 150,
    width: '95%',
    minWidth: 300,
    borderRadius: 5,
    margin: 10,
    backgroundColor: '#ffffff',
    padding: 15,
  },
  boldText: {
    fontSize: 20,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
  text: {
    fontSize: 15,
    color: 'rgb(158,158,158)',
    fontWeight: 'normal'
  },
  title: {
    color: 'rgb(65,144,255)',
    fontSize: 25,
    fontWeight: 'bold',
  },
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
  footer: {
    borderTopWidth: 0.5,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  answers: {
    backgroundColor: 'rgb(27,168,23)',
    padding: 5,
    borderRadius: 5,
    color: 'rgb(255, 255, 255)'
  },
});