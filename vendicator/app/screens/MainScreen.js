import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import BottomBar from './BottomBar.js';
import Categories from './Categories.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faMapMarkerAlt, faTh} from '@fortawesome/free-solid-svg-icons';
import data from '../../mockData.js';

function MainScreen({
  indexMaker,
  setScreen,
  main,
  vendMap,
  vend,
  favorites,
  user,
}) {
  console.log(indexMaker)
  const [categoryView, setCategoryView] = useState(false);

  const display = () => {
    setCategoryView(!categoryView);
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <View>
          <TextInput
            style={styles.input}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="VENDICATE!!"
            keyboardType="default"
          />
        </View>
        <View style={styles.categories}>
          <FontAwesomeIcon
            icon={faTh}
            size={27}
            onPress={() => setCategoryView(!categoryView)}
          />
          <Categories display={display} categoryView={categoryView} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        {data.vendors.map((singleVendor, idx) => {
          return (
            <View key={idx} style={styles.miniContainers}>
              <Image
                style={styles.mainImages}
                source={{uri: singleVendor.photos[0]}}
                onPress={() => {
                  indexMaker(idx);
                }}
              />
              <Text
                style={styles.h1}
                onPress={() => {
                  indexMaker(idx);
                }}>
                {singleVendor.name}
              </Text>
              <Text
                style={styles.h2}
                onPress={() => {
                  indexMaker(idx);
                }}>
                {singleVendor.slogan}
              </Text>
            </View>
          );
        })}
      </ScrollView>
      <BottomBar
        main={main}
        vendMap={vendMap}
        vend={vend}
        favorites={favorites}
        user={user}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 6,
  },
  categories: {
    paddingLeft: 20,
    right: 20
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    height: 25,
    width: 300,
    paddingLeft: 15,
    left: 20
  },
  scrollView: {
    width: '100%',
  },
  miniContainers: {
    // borderWidth: 0.5,
    borderRadius: 2,
    marginBottom: 30,
    width: '100%',
  },
  mainImages: {
    height: 150,
    width: '100%',
  },
  h1: {
    fontWeight: 'bold',
    paddingLeft: 5
  },
  h2: {
    fontSize: 10,
    paddingLeft: 5
  },
  bar: {

  }
});

export default MainScreen;
