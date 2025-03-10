import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './routes/routes.ts';
import {Profile} from '../components/Profile.tsx';

const Stack = createNativeStackNavigator();

export const ProfileScreen = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Profile}>
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{
          headerTitle: '',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
