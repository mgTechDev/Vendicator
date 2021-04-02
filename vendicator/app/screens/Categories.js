import React from 'react';
import {StyleSheet, Text, Image, View, SafeAreaView, TextInput, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import data from '../../mockData.js';

function Categories({display, categoryView}) {
  return (
    <SafeAreaView>
      <Modal
        isVisible={categoryView}
        style={styles.modal}
        animationIn="slideInRight"
        animationInTiming={500}
        animationOut="slideOutRight"
        animationOutTiming={300}>
        <View style={styles.container}>
          <View>
            <View style={styles.searchAndClose}>
              <Text onPress={() => display()} style={{fontSize: 30, left: -20, bottom: 5}}>{'<'}</Text>
              <TextInput style={styles.input} placeholder="Search categories" keyboard="default" />
            </View>
          </View>
          <View style={styles.container2}>
            <Text style={styles.h1}>All Categories</Text>
            <View style={styles.scrollView}>
              {data.categories.map((cats, idx) => {
                return <Text key={idx} style={styles.singleCategory}>{cats}</Text>
              })}
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 0
  },
  container: {
    height: '100%',
    top: 40
  },
  searchAndClose: {
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    borderRadius: 3,
    height: 30,
    width: 250,
    marginLeft: 20
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 25,
    paddingTop: 10,
    paddingBottom: 40,
    left: -40
  },
  singleCategory: {
    paddingBottom: 30,
    left: -40
  },
  scrollView: {
    height: '100%'
  }
})
export default Categories;