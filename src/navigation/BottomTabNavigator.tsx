import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AgendaScreen from '../screens/AgendaScreen';
import FinanceiroScreen from '../screens/FinanceiroScreen';
import { BottomTabParamList, AgendaParamList, FinanceiroParamList } from '../../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Agenda"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Agenda"
        component={AgendaNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Financeiro"
        component={FinanceiroNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="cash-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AgendaStack = createStackNavigator<AgendaParamList>();

function AgendaNavigator() {
  return (
    <AgendaStack.Navigator>
      <AgendaStack.Screen
        name="AgendaScreen"
        component={AgendaScreen}
        options={{ headerTitle: 'Agenda' }}
      />
    </AgendaStack.Navigator>
  );
}

const FinanceiroStack = createStackNavigator<FinanceiroParamList>();

function FinanceiroNavigator() {
  return (
    <FinanceiroStack.Navigator>
      <FinanceiroStack.Screen
        name="FinanceiroScreen"
        component={FinanceiroScreen}
        options={{ headerTitle: 'Financeiro' }}
      />
    </FinanceiroStack.Navigator>
  );
}
