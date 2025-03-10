import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../hooks/useAppDispatch.ts';
import {recipeActions} from '../redux/slices/recipeSlice.ts';

import {Routes} from '../screens/routes/routes.ts';

interface Props {
  isHomePage?: boolean;
}

export const Search: React.FC<Props> = ({isHomePage}) => {
  const [activeText, setActiveText] = useState('');
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const handlePress = () => {
    if (!activeText){
      return;
    } else if (isHomePage) {
      dispatch(recipeActions.searchByQuery(activeText));
      setActiveText('');
      navigation.navigate(Routes.Search);
    } else {
      dispatch(recipeActions.searchByQuery(activeText));
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <TextInput
          style={styles.search}
          value={activeText}
          onChangeText={setActiveText}
          placeholder={'Pasta with Garlic...'}
        />
      </View>
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={handlePress}>
        <Image
          source={{
            uri: 'https://img.icons8.com/?size=100&id=132&format=png&color=ffffff',
          }}
          resizeMode="contain"
          style={styles.searchBtnIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    height: 50,
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#F3F6F8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
    borderRadius: 16,
    height: '100%',
  },
  search: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
  },
  searchBtn: {
    width: 50,
    height: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#83829A',
  },
  searchBtnIcon: {
    width: '50%',
    height: '50%',
  },
});
