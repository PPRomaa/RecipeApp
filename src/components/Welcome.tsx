import {StyleSheet, Text, View} from 'react-native';

export const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello friend!</Text>
        <Text style={styles.welcomeMessage}>Let's cook something</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  userName: {
    fontSize: 20,
    color: '#444262',
  },
  welcomeMessage: {
    fontSize: 24,
    marginTop: 2,
    color: '#312651',
  },
});
