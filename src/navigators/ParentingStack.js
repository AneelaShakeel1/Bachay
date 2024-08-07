import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Parenting Screens
import ParentingFeed from '../screens/main/parenting/parentingFeed/ParentingFeed';
import ParentingRead from '../screens/main/parenting/parentingRead/ParentingRead';
import ParentingQA from '../screens/main/parenting/parentingQA/ParentingQA';
import ParentingMemories from '../screens/main/parenting/parentingMemories/ParentingMemories';
import ParentingVaccine from '../screens/main/parenting/parentingVaccine/ParentingVaccine';
import VaccineLogin from '../screens/main/parenting/parentingVaccine/vaccineLogin/VaccineLogin';
import VaccineTracker from '../screens/main/parenting/parentingVaccine/vaccineLogin/vaccineTracker/VaccineTracker';
import Articles from '../screens/main/parenting/parentingRead/articles/Articles';
import ParentingQuiz from '../screens/main/parenting/parentingQuiz/ParentingQuiz';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="ParentingFeed"
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      {/* Parenting Screens */}
      <Stack.Screen name="ParentingFeed" component={ParentingFeed} />
      <Stack.Screen name="ParentingRead" component={ParentingRead} />
      <Stack.Screen name="ParentingQA" component={ParentingQA} />
      <Stack.Screen name="ParentingMemories" component={ParentingMemories} />
      <Stack.Screen name="ParentingVaccine" component={ParentingVaccine} />
      <Stack.Screen name="VaccineLogin" component={VaccineLogin} />
      <Stack.Screen name="VaccineTracker" component={VaccineTracker} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="ParentingQuiz" component={ParentingQuiz} />
    </Stack.Navigator>
  );
}
