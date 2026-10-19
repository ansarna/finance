import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ProfileScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const name = route.params?.name || 'Қолданушы';
  const email = route.params?.email || 'Email көрсетілмеген';

  const initials = name
    .split(' ')
    .map((word: string) => word.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase();

  const handleLogout = () => {
    navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>

      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Бойы: 175 см</Text>
        <Text style={styles.infoText}>Салмағы: 68 кг</Text>
        <Text style={styles.infoText}>Мақсат: Күніне 8000 қадам</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Жүйеден шығу</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1e3a5f', alignItems: 'center', padding: 20, paddingTop: 60 },
  avatar: {
    width: 90, height: 90, borderRadius: 45, backgroundColor: '#10b981',
    justifyContent: 'center', alignItems: 'center', marginBottom: 15,
  },
  avatarText: { color: '#ffffff', fontSize: 32, fontWeight: 'bold' },
  name: { fontSize: 22, fontWeight: 'bold', color: '#ffffff', marginBottom: 5, textAlign: 'center' },
  email: { fontSize: 14, color: '#94a3b8', marginBottom: 25 },
  infoBox: { width: '100%', backgroundColor: '#334155', borderRadius: 12, padding: 20, marginBottom: 30 },
  infoText: { color: '#ffffff', fontSize: 16, marginBottom: 10 },
  logoutButton: {
    backgroundColor: '#ef4444', width: '100%', height: 50, justifyContent: 'center',
    alignItems: 'center', borderRadius: 8,
  },
  logoutButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
