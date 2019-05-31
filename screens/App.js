import React, {Component} from 'react';
import { Provider, connect } from 'react-redux';
import Home from './mainPage/Home';
import { store } from '../modules/store'
import { Router, Scene } from 'react-native-router-flux';
import QuestionPage from './questionPage/index';
import { StyleSheet } from 'react-native';
import Header from './header';


export default class App extends Component {

  render() {
    return (
      <Provider store = {store}>
        <Router>
          <Scene key = 'root'>
            <Scene key = 'home'
              component = {Home}
              title = 'Stack API'
              navBar = {Header}
              initial
            />
            <Scene key = 'questionPage'
              component = {QuestionPage}
              title = 'Stack API'
            />
          </Scene>
        </Router>
      </Provider>
    );
  }
}