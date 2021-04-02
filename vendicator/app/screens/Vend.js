import React from 'react';
import BottomBar from './BottomBar.js';
import {StyleSheet, Text, Image, View, SafeAreaView, TextInput, ScrollView, Button} from 'react-native';

function Vend({vend, main, vendMap, favorites, user}) {
  return (
    <SafeAreaView>
      <View style={styles.aboveBar}>
        <Text style={styles.h1}>Vend</Text>
        <View>
          <Text style={styles.h2}>Vendor Name</Text>
          <TextInput
            style={styles.input1}
          />
        </View>
        <View>
        <Text style={styles.h2}>Vendor Type</Text>
          <TextInput
            style={styles.input2}
          />
        </View>
        <View>
        <Text style={styles.h2}>Mobility Type</Text>
          <TextInput
            style={styles.input3}
          />
        </View>
        <View>
        <Text style={styles.h2}>Location</Text>
          <TextInput
            style={styles.input4}
          />
        </View>
        <View>
        <Text style={styles.h2}>Title</Text>
          <TextInput
            style={styles.input5}
          />
        </View>
        <View>
        <Text style={styles.h2}>Describe your vendor</Text>
          <TextInput
            style={styles.input6}
          />
        </View>
      <View>
        <Text style={styles.h2}>Upload Photos</Text>
        <Button
          title="upload"
          style={styles.upload}
        />
      </View>
      </View>
      <BottomBar
        vend={vend}
        main={main}
        vendMap={vendMap}
        favorites={favorites}
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
    paddingLeft: 5,
    marginBottom: 20
  },
  h2: {
    fontWeight: 'bold',
    paddingLeft: 5
  },
  input1: {
    borderWidth: 1,
    width: 150,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  input2: {
    borderWidth: 1,
    width: 150,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  input3: {
    borderWidth: 1,
    width: 150,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  input4: {
    borderWidth: 1,
    width: 150,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  input5: {
    borderWidth: 1,
    width: 150,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  input6: {
    borderWidth: 1,
    width: 350,
    height: 200,
    paddingBottom: 10,
    marginBottom: 10,
    marginLeft: 2
  },
  upload: {
    borderWidth: 1
  }
})

export default Vend;
