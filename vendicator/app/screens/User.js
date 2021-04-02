import React from 'react';
import BottomBar from './BottomBar.js';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import data from '../../mockData.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCog} from '@fortawesome/free-solid-svg-icons';

function User({setLoggedIn, user, main, vendMap, vend, favorites}) {
  console.log(main)
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.aboveBar}>
      <Text style={styles.h1}>Account</Text>
      <View>
        <View style={styles.userInfo}>
          <Image source={{uri: data.user.profilePic}} style={styles.image} />
          <View>
            <Text>{data.user.firstName + ' ' + data.user.lastName}</Text>
            <Text>{data.user.city + ', ' + data.user.state}</Text>
          </View>
          <FontAwesomeIcon icon={faCog} size={27} style={styles.settingsIcon} />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Transactions</Text>
        <Text>Purchases & Sales</Text>
        <Text>Payments & Deposits</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Saves</Text>
        <Text>Saved</Text>
        <Text>Search Alerts</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Account</Text>
        <Text>Account Settings</Text>
        <Text>Profile</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.h2}>Help</Text>
        <Text>Help Center</Text>
        <Text>Contact Us</Text>
      </View>
      <Text onPress={() => setLoggedIn(false)}>LOG OUT</Text>
      </View>
      <BottomBar
        style={styles.bottom}
        user={user}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  aboveBar: {
    width: '100%',
    height: '95.4%',
    marginLeft: 20
  },
  userInfo: {
    flexDirection: 'row',
    paddingTop: 20
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  settingsIcon: {
    position: 'absolute',
    left: 240,
    top: -20
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  h2: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  section: {
    borderBottomWidth: 1,
    paddingTop: 5,
    paddingBottom: 10,
    width: '90%'
  },
  bottom: {

  }
})

export default User;