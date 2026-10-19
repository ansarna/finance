import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function HomeScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const name = route.params?.name || 'Қолданушы';
  const email = route.params?.email;

  const items = [
    { icon: '💪', title: 'Жаттығулар', desc: 'Бүгінгі жаттығуды таңдаңыз', screen: 'Workout' },
    { icon: '📈', title: 'Менің прогресім', desc: 'Апталық нәтижелер', screen: 'Progress' },
    { icon: '👤', title: 'Профиль', desc: 'Жеке деректер', screen: 'Profile' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Сәлем, {name}! 👋</Text>
      <Text style={styles.subtitle}>Бүгін не істейміз?</Text>

      {items.map((item) => (
        <TouchableOpacity
          key={item.screen}
          style={styles.card}
          onPress={() =>
            item.screen === 'Profile'
              ? navigation.navigate('Profile', { name, email })
              : navigation.navigate(item.screen)
          }
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <View style={styles.info}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#1e3a5f', padding: 20, paddingTop: 60 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#94a3b8', marginBottom: 25 },
  card: {
    width: '100%',
    backgroundColor: '#334155',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { fontSize: 35, marginRight: 15 },
  info: { flex: 1 },
  cardTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  cardDesc: { color: '#cbd5e1', fontSize: 14 },
});
