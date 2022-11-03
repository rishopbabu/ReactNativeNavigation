/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Button, Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
//import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


//Home Screen
// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />
//     </View>
//   )
// }

//Detail Screen
// function DetailsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//       <Button
//         title="Go to Details... again"
//         onPress={() => navigation.push('Details')}
//       />
//       <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
//       <Button title="Go back" onPress={() => navigation.goBack()} />
//       <Button
//         title="Go back to first screen in stack"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   )
// }

//Tab Bars
function HomeScreenTabBar() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home screen tab is pressed.</Text>
    </View>
  )
}

function AboutScreenTabBar() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About screen tab is pressed.</Text>
    </View>
  )
}

function SettingsScreenTabBar() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen tab is pressed.</Text>
    </View>
  )
}
function SettingsScreenTabBar1() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen tab is pressed.</Text>
    </View>
  )
}
function SettingsScreenTabBar2() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen tab is pressed.</Text>
    </View>
  )
}
function SettingsScreenTabBar3() {
  return (
    <View style= {{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen tab is pressed.</Text>
    </View>
  )
}

//const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator()
const TopTab = createMaterialTopTabNavigator()

function MyTabs() {
  return (
    // <Tab.Navigator
    //   initialRouteName="Home"
    //   activeColor="#e91e63"
    //   labelStyle={{ fontSize: 12 }}
    //   style={{ backgroundColor: 'tomato' }} >
    //   <Tab.Screen name = "Home" component = { HomeScreenTabBar } />
    //   <Tab.Screen name = "About" component = { AboutScreenTabBar } />
    //   <Tab.Screen name = "Settings" component = { SettingsScreenTabBar } />
    //   <Tab.Screen name = "Settings1" component = { SettingsScreenTabBar1 } />
    //   <Tab.Screen name = "Settings2" component = { SettingsScreenTabBar2 } />
    //   <Tab.Screen name = "Settings3" component = { SettingsScreenTabBar3 } />
    // </Tab.Navigator>
    <TopTab.Navigator>
      <TopTab.Screen name = "Home" component = { HomeScreenTabBar } />
      <TopTab.Screen name = "About" component = { AboutScreenTabBar } />
      <TopTab.Screen name = "Settings" component = { SettingsScreenTabBar } />
    </TopTab.Navigator>
  )
}

const App = () => {
  return (
    <SafeAreaView>
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name = "Home" component = { HomeScreen } />
        <Stack.Screen name= "Details" component ={ DetailsScreen } />
      </Stack.Navigator> */}
      <MyTabs/>
    </NavigationContainer>
    </SafeAreaView>
  )
  
}

export default App;
