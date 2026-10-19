import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function RegisterScreen({
  navigation,
}: {
  navigation: any;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      Alert.alert('Қате', 'Барлық өрістерді толтырыңыз!');
      return;
    }

    navigation.replace('Home', { name: name, email: email });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тіркелу</Text>
      <Text style={styles.subtitle}>Жаңа аккаунт ашу</Text>

      <TextInput
        style={styles.input}
        placeholder="Аты-жөніңіз"
        placeholderTextColor="#94a3b8"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөз"
        placeholderTextColor="#94a3b8"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Тіркелу</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Кіру бетіне қайту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e3a5f', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#94a3b8', marginBottom: 30 },
  input: {
    width: '100%', height: 50, backgroundColor: '#334155', borderRadius: 8,
    paddingHorizontal: 15, color: '#ffffff', marginBottom: 15, fontSize: 16,
  },
  button: {
    width: '100%', height: 50, backgroundColor: '#10b981', justifyContent: 'center',
    alignItems: 'center', borderRadius: 8, marginTop: 10,
  },
  buttonText: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
  linkText: { color: '#38bdf8', marginTop: 20, fontSize: 14 },
});
