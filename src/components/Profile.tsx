import React from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {useAuth} from '../context/AuthContext.tsx';
import {Login} from '../screens';

export const Profile = () => {
  const {authState, onLogout} = useAuth();

  return (
    <SafeAreaView style={styles.container}>
      {authState?.authenticated ? (
        <View style={styles.main}>
          <TouchableOpacity onPress={onLogout} style={styles.btn}>
            <Text style={styles.text}>Logout</Text>
          </TouchableOpacity>
        </View>
      ) : <Login />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
  },
  main: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C0C8',
  },
  text: {
    color: '#312651',
    fontSize: 16,
    fontWeight: 'semibold',
  },
});
