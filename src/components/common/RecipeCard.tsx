import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppSelector} from '../../hooks/useAppSelector.ts';
import {useAuth} from '../../context/AuthContext.tsx';

import {RecipeInterface} from '../../interfaces/recipe.interface.ts';
import {RecipeNavigationProps, Routes} from '../../screens/routes/routes.ts';

export const RecipeCard: React.FC<{
  item: RecipeInterface;
  handleAdd: (item: RecipeInterface) => void;
  handleRemove?: (id: string) => void;
}> = ({item, handleAdd, handleRemove}) => {
  const savedRecipes = useAppSelector(state => state.recipes.savedRecipes);
  const navigation = useNavigation<RecipeNavigationProps>();
  const { authState } = useAuth();

  const handlePress = (id: string) => {
    navigation.navigate(Routes.RecipeInfo, {id});
  };
  const isSaved = savedRecipes.some(recipe => recipe.id === item.id);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handlePress(item.id)}>
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <Image
          source={{uri: item.image}}
          resizeMode="cover"
          style={styles.image}
        />
      </TouchableOpacity>
      <View style={styles.descriptionSection}>
        <View style={styles.info}>
          <Text numberOfLines={1} style={styles.title}>
            {item.title}
          </Text>
          <View style={styles.descriptionBlock}>
            <View style={styles.descriptionContent}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=25632&format=png&color=000000',
                }}
                resizeMode="contain"
                style={styles.descriptionImage}
              />
              <Text style={styles.descriptionText}>: {item.healthScore}</Text>
            </View>
            <View style={styles.descriptionContent}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=100&id=34&format=png&color=000000',
                }}
                resizeMode="contain"
                style={styles.descriptionImage}
              />
              <Text style={styles.descriptionText}>
                : {item.readyInMinutes}m
              </Text>
            </View>
            {item.vegetarian ? (
              <View style={styles.descriptionContent}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=100&id=3380&format=png&color=000000',
                  }}
                  resizeMode="contain"
                  style={styles.descriptionImage}
                />
              </View>
            ) : null}
          </View>
        </View>
        {authState?.authenticated ? ( isSaved ? (
          <TouchableOpacity style={styles.addIconBlock} onPress={() => handleRemove?.(item.id)}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=3062&format=png&color=000000',
              }}
              style={styles.addImage}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addIconBlock} onPress={() => handleAdd(item as RecipeInterface)}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=100&id=1501&format=png&color=000000',
              }}
              style={styles.addImage}
            />
          </TouchableOpacity>
        )) : null}
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
  },
  image: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    width: '95%',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#312651',
  },
  info: {
    padding: 12,
  },
  descriptionSection: {
    position: 'relative',
  },
  descriptionBlock: {
    flexDirection: 'row',
    marginTop: 5,
  },
  descriptionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  descriptionImage: {
    width: 15,
    height: 15,
    marginRight: 3,
  },
  addImage: {
    height: 26,
    width: 26,
  },
  descriptionText: {
    fontSize: 16,
    color: '#444262',
  },
  addIconBlock: {
    position: 'absolute',
    right: 4,
    top: 12,
  },
});
