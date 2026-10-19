import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function ForgotPasswordScreen({
  navigation,
}: {
  navigation: any;
}) {
  const [email, setEmail] = useState('');

  const handleReset = () => {
    if (!email) {
      Alert.alert('Қате', 'Email енгізіңіз!');
      return;
    }

    Alert.alert(
      'Сәтті',
      'Құпия сөзді қалпына келтіру сілтемесі email-ге жіберілді!',
      [{ text: 'Жақсы', onPress: () => navigation.navigate('Login') }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.icon}>🔐</Text>
      <Text style={styles.title}>Құпия сөзді ұмыттыңыз ба?</Text>
      <Text style={styles.subtitle}>
        Email мекенжайыңызды енгізіңіз. Біз сізге
        құпия сөзді қалпына келтіру сілтемесін жібереміз.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#94a3b8"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleReset}>
        <Text style={styles.buttonText}>Құпия сөзді қалпына келтіру</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Кіру бетіне қайту</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e3a5f', alignItems: 'center', justifyContent: 'center', padding: 20 },
  icon: { fontSize: 50, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', marginBottom: 12 },
  subtitle: { fontSize: 15, color: '#94a3b8', textAlign: 'center', lineHeight: 22, marginBottom: 30 },
  input: {
    width: '100%', height: 50, backgroundColor: '#334155', borderRadius: 8,
    paddingHorizontal: 15, color: '#ffffff', fontSize: 16, marginBottom: 15,
  },
  button: {
    width: '100%', minHeight: 50, backgroundColor: '#3b82f6', justifyContent: 'center',
    alignItems: 'center', borderRadius: 8, paddingHorizontal: 10,
  },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
  linkText: { color: '#38bdf8', marginTop: 20, fontSize: 14 },
});
