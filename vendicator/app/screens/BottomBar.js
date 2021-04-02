import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faMap, faDollarSign, faHeart, faUser} from '@fortawesome/free-solid-svg-icons';

function BottomBar({setScreen, main, vendMap, vend, favorites, user}) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faHome}
          size={30}
          onPress={() => main()}
        />
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faMap}
          size={30}
          onPress={() => vendMap()}
        />
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faDollarSign}
          size={30}
          onPress={() => vend()}
        />
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faHeart}
          size={30}
          onPress={() => favorites()}
        />
      </View>
      <View style={styles.icon}>
        <FontAwesomeIcon
          icon={faUser}
          size={30}
          onPress={() => user()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // top: 780,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: 5
  }
})

export default BottomBar;
