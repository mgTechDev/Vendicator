import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen.js';
import MainScreen from './app/screens/MainScreen.js';
import User from './app/screens/User.js';
import Vendor from './app/screens/Vendor.js';
import Vend from './app/screens/Vend.js';
import Faves from './app/screens/Faves.js';
import Map from './app/screens/Map.js';
import BottomBar from './app/screens/BottomBar.js';

export default function App(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [screen, setScreen] = useState(<MainScreen />);

  const indexMaker = idx => {
    vendor(idx);
  };

  const vendor = index => {
    setScreen(
      <Vendor
        index={index}
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  const main = () => {
    setScreen(
      <MainScreen
        indexMaker={indexMaker}
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  const vendMap = () => {
    setScreen(
      <Map
        setLoggedIn={setLoggedIn}
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  const vend = () => {
    setScreen(
      <Vend
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  const favorites = () => {
    setScreen(
      <Faves
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  const user = () => {
    console.log('this is in user!! ', main)
    setScreen(
      <User
        setLoggedIn={setLoggedIn}
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />,
    );
  };

  if (loggedIn) {
    return screen;
  } else {
    return (
      <WelcomeScreen
        setLoggedIn={setLoggedIn}
        setScreen={setScreen}
        main={main}
        vendMap={vendMap}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'dodgerblue',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// --legacy-peer-deps
