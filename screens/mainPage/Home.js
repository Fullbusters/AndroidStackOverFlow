import React from 'react'
import {  StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import Question from './Question';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changePageAndReload } from '../../modules/mainPage/action'
import Tag from './Tag'


class Home extends React.Component {

  state = {
    loading: false
  }

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  handleLoadMore = () => {
    const { changePageAndReload } = this.props;
    changePageAndReload()
  };

  render() {

    const { tags, questions } = this.props;
    return(
      <View style = {styles.container}>
        <View style = {styles.tagsContainer}>
          {tags.map(function(item, i){
            return (
              <Tag tag = {item} key = {i} />
            )
          })}
        </View>
        <FlatList
          contentContainerStyle = {{ alignItems: 'center'}}
          data={questions}
          renderItem={({item}) => {
            return <Question question={item} />
          }}
          keyExtractor = {item => item.question_id.toString()}
          ListFooterComponent = {this.renderFooter}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={0}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#200772',
  },
  tagsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  lists: {
    alignItems: 'center',
    marginBottom: 150,
    backgroundColor: 'black'
  },
  listWidth: {
    width: '100%',
  },
});

const mapStateToProps = state => {
  return{
    tags: state.mainPageReducer.tags,
    questions: state.mainPageReducer.questions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePageAndReload: bindActionCreators(changePageAndReload, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);