import {FlatList, RefreshControl, SafeAreaView, StyleSheet} from 'react-native';
import {useCallback, useEffect, useState} from 'react';

import {useAppDispatch} from '../hooks/useAppDispatch.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';

import {CategoryList, Recipes, Search, Welcome} from '../components';

export const MainScreen = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [page, _] = useState<number>(5);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(recipeActions.getAll(page));
  }, [page, dispatch]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(recipeActions.getAll(5));
      setRefreshing(false);
    }, 2000);
  }, [dispatch]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[]}
        renderItem={null}
        style={styles.viewBlock}
        ListHeaderComponent={
          <>
            <Welcome />
            <Search isHomePage/>
            <CategoryList />
            <Recipes />
          </>
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#f0f0f0',
  },
  viewBlock: {
    padding: 16,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
