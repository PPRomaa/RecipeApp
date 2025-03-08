import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RecipeScreen} from './RecipeScreen.tsx';
import {SearchTab} from '../components';

import {Routes} from './routes/routes.ts';

const Stack = createNativeStackNavigator();

export const SearchScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SearchScreen}>
      <Stack.Screen
        name={Routes.SearchScreen}
        component={SearchTab}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={Routes.RecipeInfo}
        component={RecipeScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};
