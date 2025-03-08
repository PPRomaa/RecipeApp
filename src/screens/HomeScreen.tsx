import {createNativeStackNavigator} from '@react-navigation/native-stack';


import {Routes} from './routes/routes.ts';
import {MainScreen} from './MainScreen.tsx';
import {RecipeInfo, ScreenHeaderBtn} from '../components';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.MainScreen}>
      <Stack.Screen
        name={Routes.MainScreen}
        component={MainScreen}
        options={{
          headerTitle: '',
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={
                'https://img.icons8.com/?size=100&id=6904&format=png&color=000000'
              }
              dimension="70%"
              handlePress={() => console.log('Button Pressed')}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={
                'https://img.icons8.com/?size=100&id=11730&format=png&color=000000'
              }
              dimension="100%"
              handlePress={() => console.log('Button Pressed')}
            />
          ),
        }}
      />
      <Stack.Screen name={Routes.RecipeInfo} component={RecipeInfo} options={{
        headerTitle: '',
      }}/>
    </Stack.Navigator>
  );
};
