import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts, DMSans_300Light, DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import { Syne_600SemiBold, Syne_700Bold, Syne_800ExtraBold } from '@expo-google-fonts/syne';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { colors } from './src/theme';

import SplashScreen from './src/screens/SplashScreen';
import ModeScreen from './src/screens/ModeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import BodyMapScreen from './src/screens/BodyMapScreen';
import PrimaryPickerScreen from './src/screens/PrimaryPickerScreen';
import QuestionnaireScreen from './src/screens/QuestionnaireScreen';
import RedFlagScreen from './src/screens/RedFlagScreen';
import ResultsScreen from './src/screens/ResultsScreen';
import RecoveryPlanScreen from './src/screens/RecoveryPlanScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import SummaryScreen from './src/screens/SummaryScreen';

const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_300Light,
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    Syne_600SemiBold,
    Syne_700Bold,
    Syne_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <View style={{ flex: 1, backgroundColor: colors.bg }} />;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.bg} />
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
            cardStyle: { backgroundColor: colors.bg },
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Mode" component={ModeScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="BodyMap" component={BodyMapScreen} />
          <Stack.Screen name="PrimaryPicker" component={PrimaryPickerScreen} />
          <Stack.Screen name="Questionnaire" component={QuestionnaireScreen} />
          <Stack.Screen name="RedFlags" component={RedFlagScreen} />
          <Stack.Screen name="Results" component={ResultsScreen} />
          <Stack.Screen name="RecoveryPlan" component={RecoveryPlanScreen} />
          <Stack.Screen name="Feedback" component={FeedbackScreen} />
          <Stack.Screen name="Summary" component={SummaryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
