import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

const items = [
  { icon: '👟', title: 'Қадамдар', value: '42,580', goal: 'Мақсат: 56,000 қадам', percent: '76%' },
  { icon: '💧', title: 'Су ішу', value: '12.6 л', goal: 'Апталық мақсат: 17.5 л', percent: '72%' },
  { icon: '🔥', title: 'Калория', value: '2,840 ккал', goal: 'Апталық мақсат: 4,000 ккал', percent: '71%' },
];

export default function ProgressScreen({
  navigation,
}: {
  navigation: any;
}) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Менің прогресім</Text>
      <Text style={styles.subtitle}>Осы аптадағы нәтижелеріңіз</Text>

      {items.map((item) => (
        <View style={styles.progressCard} key={item.title}>
          <Text style={styles.cardIcon}>{item.icon}</Text>

          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardValue}>{item.value}</Text>
            <Text style={styles.cardDescription}>{item.goal}</Text>

            <View style={styles.progressBackground}>
              <View style={[styles.progressFill, { width: item.percent as any }]} />
            </View>
          </View>
        </View>
      ))}

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>🏆 Апталық нәтиже</Text>
        <Text style={styles.summaryText}>Сіз мақсатыңыздың 73%-ын орындадыңыз!</Text>
        <Text style={styles.summaryText}>Жақсы нәтиже! Осы қарқынмен жалғастырыңыз.</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Артқа қайту</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#1e3a5f', padding: 20, paddingTop: 40 },
  title: { fontSize: 30, fontWeight: 'bold', color: '#ffffff', marginBottom: 8 },
  subtitle: { fontSize: 16, color: '#94a3b8', marginBottom: 25 },
  progressCard: {
    width: '100%', backgroundColor: '#334155', borderRadius: 12, padding: 20,
    marginBottom: 15, flexDirection: 'row', alignItems: 'center',
  },
  cardIcon: { fontSize: 35, marginRight: 15 },
  cardContent: { flex: 1 },
  cardTitle: { color: '#94a3b8', fontSize: 15, marginBottom: 3 },
  cardValue: { color: '#ffffff', fontSize: 22, fontWeight: 'bold', marginBottom: 4 },
  cardDescription: { color: '#cbd5e1', fontSize: 13, marginBottom: 10 },
  progressBackground: {
    width: '100%', height: 8, backgroundColor: '#475569', borderRadius: 10, overflow: 'hidden',
  },
  progressFill: { height: '100%', backgroundColor: '#10b981', borderRadius: 10 },
  summaryBox: {
    width: '100%', backgroundColor: '#334155', borderRadius: 12, padding: 20,
    marginTop: 10, marginBottom: 20,
  },
  summaryTitle: { color: '#ffffff', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  summaryText: { color: '#cbd5e1', fontSize: 14, marginBottom: 6, lineHeight: 20 },
  backButton: {
    backgroundColor: '#3b82f6', width: '100%', height: 50, justifyContent: 'center',
    alignItems: 'center', borderRadius: 8, marginBottom: 20,
  },
  backButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
