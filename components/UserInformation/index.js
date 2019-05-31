import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';


export default UserInfo = ({ user = {}, date = 'wait' }) => (
  <View style = {styles.ownerBloc}>
    <Image source={{uri: '' + user.profile_image}} style={{width: 40, height: 40}} />
    <View style = {styles.userInfo}>
      <View style = {styles.upperText}>
        <Text style = {styles.boldText}>{user.display_name}</Text>
        <Text style = {styles.text}> {user.user_id}</Text>
      </View>
        <Text style = {styles.text}> on {date}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  ownerBloc: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 5,
  },
  boldText: {
    fontSize: 20,
    color: 'rgb(0, 0, 0)',
    fontWeight: 'bold',
  },
  upperText: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 15,
    color: 'rgb(158,158,158)',
    fontWeight: 'normal'
  },
});