import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {useAppSelector} from '../hooks/useAppSelector.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';
import {useAppDispatch} from '../hooks/useAppDispatch.ts';

import {RecipeCard} from './common/RecipeCard.tsx';
import {RecipeInterface} from '../interfaces/recipe.interface.ts';

export const Recipes = () => {
  const {recipes, status} = useAppSelector(state => state.recipes);
  const dispatch = useAppDispatch();

  const handleUpdate = () => {
    if (recipes.length > 20) {
      return;
    }
    dispatch(recipeActions.updateState(5));
  };
  const handleAdd = (item: RecipeInterface) => {
    dispatch(recipeActions.addSave(item));
  };
  const handleRemove = (id: string) => {
    dispatch(recipeActions.removeSave(id));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Recipes</Text>
      </View>

      <View style={styles.cardsContainer}>
        {status === 'loading' ? (
          <ActivityIndicator size="large" color={'gray'} />
        ) : status === 'failed' ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={recipes}
            renderItem={({item}) => (
              <RecipeCard
                item={item}
                handleAdd={handleAdd}
                handleRemove={handleRemove}
              />
            )}
            keyExtractor={item => item.id}
            onEndReached={handleUpdate}
            onEndReachedThreshold={0.2}
            nestedScrollEnabled
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
  header: {
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 20,
    color: '#312651',
  },
  cardsContainer: {
    width: '100%',
  },
});
