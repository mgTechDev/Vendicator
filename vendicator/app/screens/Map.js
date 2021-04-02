import React from 'react';
import BottomBar from './BottomBar.js';
import {StyleSheet, Text, Image, View, SafeAreaView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

function Map({vendMap, main, vend, favorites, user}) {
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.7086,
          longitude: -117.1626,
          latitudeDelta: 0.20001,
          longitudeDelta: 0.0421,
        }}
      />
      <View style={styles.bar}>
        <BottomBar
          vendMap={vendMap}
          main={main}
          vend={vend}
          favorites={favorites}
          user={user}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: 770,
    width: 390
  },
  bar: {
    marginTop: 5,
  }
})

export default Map;
