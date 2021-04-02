import React from 'react';
import BottomBar from './BottomBar.js';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';

function Faves({favorites, main, vendMap, vend, user}) {
  return (
    <SafeAreaView>
      <View style={styles.aboveBar}>
        <Text style={styles.h1}>Favorites</Text>
      </View>
        <BottomBar
          favorites={favorites}
          main={main}
          vendMap={vendMap}
          vend={vend}
          user={user}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  aboveBar: {
    height: '95.4%'
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingLeft: 5
  }
});

export default Faves;
