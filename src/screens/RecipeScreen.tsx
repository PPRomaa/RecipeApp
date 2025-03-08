import React from 'react';
import {useRoute} from '@react-navigation/native';

import {Routes, SavedRecipeRouteProps} from './routes/routes.ts';
import {RecipeInfo} from '../components';

export const RecipeScreen = () => {
  const {params} = useRoute<SavedRecipeRouteProps<Routes.RecipeScreen>>();

  if (params.isSaved) {
    return (
      <>
        <RecipeInfo isSaved/>
      </>
    );
  }
  return (
    <>
      <RecipeInfo isRecipe />
    </>
  );
};
