import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useAppSelector} from '../hooks/useAppSelector.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';
import {useAppDispatch} from '../hooks/useAppDispatch.ts';

import {RecipeSavedNavigationProps, Routes} from '../screens/routes/routes.ts';
import {SearchCard} from './common/SearchCard.tsx';

export const Saved = () => {
  const {savedRecipes} = useAppSelector(state => state.recipes);
  const navigation = useNavigation<RecipeSavedNavigationProps>();

  const dispatch = useAppDispatch();

  const handlePress = (id: string) => {
    let recipe = savedRecipes.find(item => item.id === id);
    if (recipe) {
      dispatch(recipeActions.chooseRecipe(recipe));
      navigation.navigate(Routes.RecipeScreen, {isSaved: true});
    }
  };
  const handleRemove = (id: string) => {
    dispatch(recipeActions.removeSave(id));
  };
  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={null}
        style={styles.viewBlock}
        ListHeaderComponent={
          <>
            {!savedRecipes.length && (
              <View style={styles.textBlock}>
                <Image
                  source={{
                    uri: 'https://img.icons8.com/?size=100&id=3K2JEFntVlG8&format=png&color=000000',
                  }}
                  style={styles.sectionImage}
                />
                <Text style={styles.text}>
                  This is where your saved recipes should be
                </Text>
              </View>
            )}
            <FlatList
              style={styles.listBlock}
              data={savedRecipes}
              renderItem={({item}) => (
                <SearchCard
                  item={item}
                  handlePress={() => handlePress(item.id)}
                  remove={() => handleRemove(item.id)}
                />
              )}
              keyExtractor={item => item.id}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBlock: {
    width: '100%',
    paddingHorizontal: 12,
  },
  listBlock: {
    flex: 1,
    marginTop: 16,
  },
  textBlock: {
    width: '100%',
    alignItems: 'center',
    marginTop: 40,
  },
  text: {
    color: '#312651',
    fontSize: 24,
    fontWeight: 'bold',
  },
  sectionImage: {
    height: 100,
    width: 100,
    marginBottom: 15,
  },
});
