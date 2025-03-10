import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useAppDispatch} from '../hooks/useAppDispatch.ts';
import {useAppSelector} from '../hooks/useAppSelector.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';

import {Search} from './Search.tsx';
import {SearchCard} from './common/SearchCard.tsx';
import {RecipeNavigationProps, Routes} from '../screens/routes/routes.ts';

export const SearchTab = () => {
  const {searchRecipes} = useAppSelector(state => state.recipes);
  const navigation = useNavigation<RecipeNavigationProps>();

  const dispatch = useAppDispatch();

  const handlePress = async (id: any) => {
    await dispatch(recipeActions.searchFullInfo(id));
    navigation.navigate(Routes.RecipeInfo, {isRecipe: true});
  };

  return (
    <SafeAreaView>
      <FlatList
        data={[]}
        renderItem={null}
        style={styles.viewBlock}
        ListHeaderComponent={
          <>
            <Search />
            {!searchRecipes && (
              <View style={styles.textBlock}>
                <Text style={styles.text}>Let's find something!</Text>
              </View>
            )}
            {searchRecipes && (
              <FlatList
                style={styles.listBlock}
                data={searchRecipes.results}
                renderItem={({item}) => (
                  <SearchCard item={item} handlePress={handlePress} />
                )}
                keyExtractor={item => item.id}
              />
            )}
          </>
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewBlock: {
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
    fontWeight: 'semibold',
  },
});
