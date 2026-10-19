import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';

export default function WorkoutScreen({
  navigation,
}: {
  navigation: any;
}) {
  const workouts = [
    { name: 'Таңғы жаттығу', duration: '15 минут', level: 'Жеңіл', icon: '🌅' },
    { name: 'Кардио', duration: '25 минут', level: 'Орташа', icon: '🏃' },
    { name: 'Күш жаттығулары', duration: '30 минут', level: 'Орташа', icon: '💪' },
    { name: 'Созылу жаттығулары', duration: '10 минут', level: 'Жеңіл', icon: '🧘' },
    { name: 'HIIT жаттығуы', duration: '20 минут', level: 'Қиын', icon: '🔥' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Жаттығулар</Text>
      <Text style={styles.subtitle}>Бүгінгі жаттығуыңызды таңдаңыз</Text>

      {workouts.map((workout, index) => (
        <View style={styles.workoutCard} key={index}>
          <View style={styles.iconBox}>
            <Text style={styles.icon}>{workout.icon}</Text>
          </View>

          <View style={styles.workoutInfo}>
            <Text style={styles.workoutName}>{workout.name}</Text>
            <Text style={styles.workoutDetails}>⏱ {workout.duration}</Text>
            <Text style={styles.level}>{workout.level}</Text>
          </View>

          <TouchableOpacity
            style={styles.startButton}
            onPress={() => Alert.alert('Жаттығу', `${workout.name} басталды!`)}
          >
            <Text style={styles.startButtonText}>Бастау</Text>
          </TouchableOpacity>
        </View>
      ))}

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
  workoutCard: {
    width: '100%', backgroundColor: '#334155', borderRadius: 12, padding: 15,
    marginBottom: 15, flexDirection: 'row', alignItems: 'center',
  },
  iconBox: {
    width: 55, height: 55, backgroundColor: '#475569', borderRadius: 12,
    justifyContent: 'center', alignItems: 'center', marginRight: 12,
  },
  icon: { fontSize: 28 },
  workoutInfo: { flex: 1 },
  workoutName: { color: '#ffffff', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  workoutDetails: { color: '#cbd5e1', fontSize: 13, marginBottom: 3 },
  level: { color: '#10b981', fontSize: 13 },
  startButton: { backgroundColor: '#10b981', paddingVertical: 9, paddingHorizontal: 12, borderRadius: 7 },
  startButtonText: { color: '#ffffff', fontSize: 13, fontWeight: 'bold' },
  backButton: {
    backgroundColor: '#3b82f6', width: '100%', height: 50, justifyContent: 'center',
    alignItems: 'center', borderRadius: 8, marginTop: 10, marginBottom: 20,
  },
  backButtonText: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});
