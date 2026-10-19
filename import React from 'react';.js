import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>Finance</Text>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>F</Text>
        </View>
      </View>

      {/* Empty content */}
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>＋</Text>
        </View>

        <Text style={styles.title}>Welcome to Finance</Text>

        <Text style={styles.subtitle}>
          Your financial journey starts here.
        </Text>
      </View>

      {/* Bottom navigation */}
      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.activeIcon}>⌂</Text>
          <Text style={styles.activeText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>↔</Text>
          <Text style={styles.navText}>Transactions</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>▤</Text>
          <Text style={styles.navText}>Statistics</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⚙</Text>
          <Text style={styles.navText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FC',
    paddingTop: 55,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },

  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#202442',
  },

  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E5E9FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#5965D8',
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: '#E9ECFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },

  icon: {
    fontSize: 45,
    color: '#5965D8',
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#202442',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#8B90A5',
    textAlign: 'center',
  },

  bottomNav: {
    height: 85,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#ECEEF5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
  },

  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },

  activeIcon: {
    fontSize: 25,
    color: '#5965D8',
  },

  activeText: {
    fontSize: 11,
    color: '#5965D8',
    fontWeight: '600',
  },

  navIcon: {
    fontSize: 24,
    color: '#A5A9BA',
  },

  navText: {
    fontSize: 11,
    color: '#A5A9BA',
  },
});