import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {dishTypes} from '../enum';

interface IProps {
  active: string;
  setActive: (item: string) => void;
}

export const CategoryList: React.FC<IProps> = ({active, setActive}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dishTypes}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[styles.tab, active === item && styles.activeTab]}
            onPress={() => setActive(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap: 12}}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 16,
  },
  listContainerBtn: {},
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C0C8',
  },
  activeTab: {
    borderColor: '#83829A',
  },
});
