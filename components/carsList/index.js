import React from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import CarItem from '../carItem';
import styles from './styles';
import cars from './cars';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
