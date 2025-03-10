import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import {useAppSelector} from '../hooks/useAppSelector.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';

import {useAppDispatch} from '../hooks/useAppDispatch.ts';
import {useAuth} from '../context/AuthContext.tsx';

import {RecipeRouteProps, Routes} from '../screens/routes/routes.ts';
import {RecipeInterface} from '../interfaces/recipe.interface.ts';

interface IProps {
  isRecipe?: boolean;
  isSaved?: boolean;
}

export const RecipeInfo: React.FC<IProps> = ({isRecipe, isSaved}) => {
  const recipes = useAppSelector(state =>
    isRecipe
      ? state.recipes.recipe
      : isSaved
      ? state.recipes.savedRecipe
      : state.recipes.recipes,
  );
  const savedRecipes = useAppSelector(state => state.recipes.savedRecipes);

  const {params} = useRoute<RecipeRouteProps<Routes.RecipeInfo>>();
  const {authState} = useAuth();
  const dispatch = useAppDispatch();

  let recipe: RecipeInterface | null = null;
  if (isRecipe && recipes) {
    recipe = recipes as RecipeInterface;
  } else if (isSaved && recipes) {
    recipe = recipes as RecipeInterface;
  } else if (!isRecipe && Array.isArray(recipes)) {
    recipe = recipes.find(item => item.id === params.id) ?? null;
  }
  const savedRecipe =
    recipe && recipe.id
      ? savedRecipes.some(stateRecipe => stateRecipe.id === recipe?.id)
      : false;

  const handleAdd = (item: RecipeInterface) => {
    dispatch(recipeActions.addSave(item));
  };
  const handleRemove = (id?: string) => {
    dispatch(recipeActions.removeSave(id));
  };
  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Image
            source={{uri: recipe?.image}}
            style={styles.recipeImg}
            resizeMode="cover"
          />
          <View style={styles.descriptionBlock}>
            <View style={styles.descriptionTitle}>
              <Text style={styles.recipeTittle}>{recipe?.title}</Text>
              {authState?.authenticated ? (
                savedRecipe ? (
                  <TouchableOpacity
                    style={styles.addIconBlock}
                    onPress={() => handleRemove?.(recipe?.id)}>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/?size=100&id=3062&format=png&color=000000',
                      }}
                      style={styles.addImage}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.addIconBlock}
                    onPress={() => handleAdd(recipe as RecipeInterface)}>
                    <Image
                      source={{
                        uri: 'https://img.icons8.com/?size=100&id=1501&format=png&color=000000',
                      }}
                      style={styles.addImage}
                    />
                  </TouchableOpacity>
                )
              ) : null}
            </View>
            <FlatList
              data={recipe?.dishTypes}
              renderItem={({item}) => (
                <View style={styles.dishTypes}>
                  <Text style={styles.colorText}>{item}</Text>
                </View>
              )}
              keyExtractor={(_, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              horizontal
            />
            <Text style={styles.descriptionText}>
              {(recipe?.summary ?? '').replace(/<[^>]+>/g, '')}
            </Text>
          </View>
          <View style={styles.descriptionBlock}>
            <Text style={styles.recipeTittle}>Ingredients:</Text>
            <FlatList
              data={recipe?.extendedIngredients}
              renderItem={({item, index}) => (
                <Text style={styles.descriptionText}>
                  {index + 1}: {item?.original}
                </Text>
              )}
              keyExtractor={(item, index) => item.id + index}
            />
          </View>
          <View style={styles.descriptionBlock}>
            <Text style={styles.recipeTittle}>Instructions:</Text>
            <Text style={styles.descriptionText}>
              {recipe?.instructions.replace(/<[^>]+>/g, ' ').trim()}
            </Text>
          </View>
        </>
      }
      data={[]}
      renderItem={null}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  recipeImg: {
    width: '100%',
    height: 250,
  },
  descriptionBlock: {
    padding: 12,
  },
  recipeTittle: {
    width: '90%',
    fontSize: 22,
    fontWeight: 'bold',
    color: '#312651',
  },
  dishTypes: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C0C8',
    marginTop: 8,
    marginRight: 5,
    fontSize: 18,
  },
  descriptionText: {
    marginTop: 8,
    fontSize: 15,
    color: '#312651',
  },
  colorText: {
    color: '#444262',
  },
  descriptionTitle: {
    position: 'relative',
  },
  addImage: {
    height: 26,
    width: 26,
  },
  addIconBlock: {
    position: 'absolute',
    right: 4,
  },
});
