import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Saved} from '../components';
import {RecipeScreen} from './RecipeScreen.tsx';

import {Routes} from './routes/routes.ts';

const Stack = createNativeStackNavigator();

export const SavedScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.SavedStack}>
      <Stack.Screen
        name={Routes.SavedStack}
        component={Saved}
        options={{
          headerTitle: 'Saved',
        }}
      />
      <Stack.Screen
        name={Routes.RecipeScreen}
        component={RecipeScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
};
