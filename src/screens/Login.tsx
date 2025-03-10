import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useAuth} from '../context/AuthContext.tsx';
import {useState} from 'react';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {onLogin, onRegister} = useAuth();

  const login = async () => {
    //We can use for validation - Yup, but this just example
    if (email.length < 5 || password.length < 5) {
      return;
    }
    const result = await onLogin!(email, password);

    if (result && result.error) {
      console.log(result.msg);
    }
  };
  const register = async () => {
    if (email.length < 5 || password.length < 5) {
      return;
    }
    const result = await onRegister!(email, password);

    if (result && result.error) {
      console.log(result.msg);
    } else {
      login();
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text: string) => setPassword(text)}
          value={password}
        />
        <View style={styles.btnBlock}>
          <TouchableOpacity style={styles.btn} onPress={login}>
            <Text style={styles.text}>Sigh in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={register}>
            <Text style={styles.text}>Create account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    gap: 10,
    width: '60%',
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#C1C0C8',
  },
  btnBlock: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
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
