import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import colors from '../config/colors.js';

const WelcomeScreen = ({main, setLoggedIn, setScreen}) => {
  return (
    <ImageBackground
      source={require('../assets/primaryElote.png')}
      style={styles.background}>
      <View style={styles.logoContainer}>
        <Text style={styles.companyName}>Vendicator</Text>
        <Image style={styles.logo} source={require('../assets/myLogo.png')} />
      </View>
      <View style={styles.loginButton}>
        <Text
          style={styles.logInText}
          onPress={() => {
            setScreen(main);
            setLoggedIn(true);
          }}
        >Log In
        </Text>
      </View>
      <View style={styles.registerButton}>
        <Text style={styles.registerText}>Register</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 40,
    alignItems: 'center',
  },
  companyName: {
    fontSize: 50,
    color: colors.primary,
    fontWeight: 'bold',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  logInText: {
    color: colors.text,
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
    fontSize: 25
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  registerText: {
    color: colors.text,
    textAlign: 'center',
    top: 20,
    fontWeight: 'bold',
    fontSize:25
  }
});

export default WelcomeScreen;
