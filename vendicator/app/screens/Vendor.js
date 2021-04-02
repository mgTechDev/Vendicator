import React from 'react';
import BottomBar from './BottomBar.js';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import data from '../../mockData.js';

function Vendor({index, main, vendMap, vend, favorites, user}) {
  const [intervals, setIntervals] = React.useState(1);
  const itemsPerInterval =
    data.vendors[index].photos.itemsPerInterval === undefined
      ? 1
      : data.vendors[index].photos.itemsPerInterval;
  const [width, setWidth] = React.useState(0);
  const init = (width: number) => {
    // initialise width
    setWidth(width);
    // initialise total intervals
    const totalItems = items.length;
    setIntervals(Math.ceil(totalItems / itemsPerInterval));
  };
  return (
    <SafeAreaView>
      <View style={styles.aboveBar}>
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            ...styles.scrollView,
            width: `${390 * intervals}%`,
          }}
          showsHorizontalScrollIndicator={true}
          scrollEventThrottle={200}
          decelerationRate="fast"
          pagingEnabled
          style={styles.scroll}
          >
          {data.vendors[index].photos.map((photo, idx) => {
            return <Image source={{uri: photo}} style={styles.image} />;
          })}
        </ScrollView>
        <Image />
      </View>
      <View>
        <View>
          {/* <Text style={styles.h3}>Vendor Name:</Text> */}
          <Text style={styles.h1}>{data.vendors[index].name}</Text>
        </View>
        <View>
          {/* <Text style={styles.h3}>Slogan:</Text> */}
          <Text style={styles.h2}>{data.vendors[index].slogan}</Text>
        </View>
        <View>
          {/* <Text style={styles.h3}>Mobility:</Text> */}
          <Text style={styles.h2}>{data.vendors[index].description}</Text>
        </View>
        <View>
          {/* <Text style={styles.h3}>Location:</Text> */}
          <Text style={styles.h3}>{data.vendors[index].mobilityType}</Text>
        </View>
        <View>
          {/* <Text style={styles.h3}>Description:</Text> */}
          <Text style={styles.h3}>{data.vendors[index].locationType}</Text>
        </View>
      </View>
      </View>
      <View style={styles.bar}>
        <BottomBar
          main={main}
          vendMap={vendMap}
          vend={vend}
          favorites={favorites}
          user={user}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  aboveBar: {
    height: '95%'
  },
  scroll: {},
  image: {
    height: 350,
    width: 390,
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 5,
  },
  h2: {
    padding: 5,
  },
  h3: {
    fontSize: 8,
    padding: 2,
    paddingLeft: 10
  },
  bar: {

  }
});

export default Vendor;
