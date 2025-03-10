import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export enum Routes {
  Home = 'Home',
  MainScreen = 'MainScreen',
  RecipeInfo = 'RecipeInfo',
  RecipeScreen = 'RecipeScreen',
  Saved = 'Saved',
  SavedStack = 'SavedStack',
  Search = 'Search',
  SearchScreen = 'SearchScreen',
  Profile = 'Profile',
  ProfileScreen = 'ProfileScreen',
}

export type MainScreenParams = {[Routes.MainScreen]: undefined};
export type SavedRecipeScreenParams = {[Routes.SavedStack]: undefined};

export type RecipeParams = {
  [Routes.RecipeInfo]: {
    id?: string;
    isRecipe?: boolean;
  };
};
export type SavedRecipeParams = {
  [Routes.RecipeScreen]: {
    isSaved?: boolean
  }
};

export type RecipeNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<MainScreenParams, Routes.MainScreen>,
  CompositeNavigationProp<
    NativeStackNavigationProp<MainScreenParams, Routes.MainScreen>,
    NativeStackNavigationProp<RecipeParams, Routes.RecipeInfo>
  >
>;
export type RecipeSavedNavigationProps = CompositeNavigationProp<
  NativeStackNavigationProp<SavedRecipeScreenParams, Routes.SavedStack>,
  CompositeNavigationProp<
    NativeStackNavigationProp<SavedRecipeScreenParams, Routes.SavedStack>,
    NativeStackNavigationProp<SavedRecipeParams, Routes.RecipeScreen>
  >
>;

export type RecipeRouteProps<RouteName extends keyof RecipeParams> = RouteProp<
  RecipeParams,
  RouteName
>;
export type SavedRecipeRouteProps<RouteName extends keyof SavedRecipeParams> = RouteProp<
  SavedRecipeParams,
  RouteName
>;
