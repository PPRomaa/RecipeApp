import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';


import {Routes} from './routes/routes.ts';
import {MainScreen} from './MainScreen.tsx';
import {RecipeInfo, ScreenHeaderBtn} from '../components';

const Stack = createNativeStackNavigator();

export const HomeScreen = () => {
  const navigationToProfile = useNavigation<any>();

  return (
    <Stack.Navigator initialRouteName={Routes.MainScreen}>
      <Stack.Screen
        name={Routes.MainScreen}
        component={MainScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={
                'https://img.icons8.com/?size=100&id=11730&format=png&color=000000'
              }
              dimension="100%"
              handlePress={() => navigationToProfile.navigate(Routes.ProfileScreen)}
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
