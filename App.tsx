import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './src/components/LoginScreen';
import RegisterScreen from './src/components/RegisterScreen';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen';
import HomeScreen from './src/components/HomeScreen';
import ProfileScreen from './src/components/ProfileScreen';
import WorkoutScreen from './src/components/WorkoutScreen';
import ProgressScreen from './src/components/ProgressScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Тіркелу' }} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} options={{ title: 'Құпия сөзді қалпына келтіру' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Workout" component={WorkoutScreen} options={{ title: 'Жаттығулар' }} />
        <Stack.Screen name="Progress" component={ProgressScreen} options={{ title: 'Менің прогресім' }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Профиль' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
