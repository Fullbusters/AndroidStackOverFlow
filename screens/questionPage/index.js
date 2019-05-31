import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getQuestions } from '../../modules/questionPage/action'
import { Components }  from '../../components'
import Question from './question';


class QuestionPage extends React.Component {

  componentDidMount() {
    const { getQuestions, questionId } = this.props
    getQuestions(questionId)
  }

  render() {

    const { question } = this.props;
    return(
      <View style = {styles.body}>
        { question.length> 0 ? 
        (<Question />) 
        : (<Text>wait</Text>)
        }
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

const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: bindActionCreators(getQuestions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionPage);