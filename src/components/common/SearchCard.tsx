import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {ComplexResult} from '../../interfaces/recipe.interface.ts';

interface IProps {
  item: ComplexResult,
  handlePress:(id?:string) => void,
  remove?:(id:string) => void,
}

export const SearchCard: React.FC<IProps> = ({item, handlePress, remove}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => handlePress(item.id)}>
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <Image style={styles.img} source={{uri: item.image}} />
      </TouchableOpacity>
      <View style={styles.textSection}>
        <Text numberOfLines={1} style={styles.title}>
          {item.title}
        </Text>
        {remove && (
          <TouchableOpacity style={styles.addIconBlock} onPress={() => remove(item.id)}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=3062&format=png&color=000000',
              }}
              style={styles.addImage}
            />
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 5,
    marginBottom: 14,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: 140,
  },
  textSection:{
    padding:  12,
  },
  title: {
    width: '95%',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#312651',
  },
  addImage: {
    height: 26,
    width: 26,
  },
  addIconBlock: {
    position: 'absolute',
    right: 4,
    top: 10,
  },
});
