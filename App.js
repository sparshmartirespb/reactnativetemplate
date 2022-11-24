/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react'
 import type { Node } from 'react'
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   Image,
   View,
 } from 'react-native'
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen'
 import Message from './src/assets/Message'
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
 import { NavigationContainer } from '@react-navigation/native'
 import Comment from './src/assets/Comment'
 import Twitter from './src/assets/Twitter'
 import Profile from './src/assets/Profile'
 import Bell from './src/assets/Bell'
 import Home from './src/assets/Home'
 import Star from './src/assets/Star'
 import HomePage from './src/screens/HomePage'
 import PostList from './src/components/PostList'
 import { createNativeStackNavigator } from '@react-navigation/native-stack'
 
 const Stack = createNativeStackNavigator()
 const Tab = createBottomTabNavigator()
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark'
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   }
 
   function MyTabs() {
     return (
       <Tab.Navigator
         initialRouteName={HomePage}
         screenOptions={{
           tabBarActiveTintColor: '#e91e63',
         }}
       >
         <Tab.Screen
           name="Home"
           component={HomePage}
           options={{
             headerLeft: (props) => (
               <View style={styles.paddingLeft}>
                 <Profile {...props} />
               </View>
             ),
             headerTitle: (props) => <Twitter {...props} />,
             headerRight: (props) => (
               <View style={styles.paddingRight}>
                   <Star {...props} />
               </View>
             ),
             tabBarLabel: '',
             tabBarIcon: ({ color, size }) => <Home />,
           }}
         />
         <Tab.Screen
           name="Notification"
           component={HomePage}
           options={{
             tabBarLabel: '',
             tabBarIcon: ({ color, size }) => <Bell />,
           }}
         />
         <Tab.Screen
           name="Message"
           component={HomePage}
           options={{
             tabBarLabel: '',
             tabBarIcon: ({ color, size }) => <Message />,
           }}
         />
       </Tab.Navigator>
     )
   }
   return (
     <NavigationContainer>
       <MyTabs />
     </NavigationContainer>
   )
 }
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   paddingLeft: {
     paddingLeft: 20,
   },
   paddingRight: {
     paddingRight: 20,
   },
   header: {
     flex: 1,
     flexDirection: 'row',
     alignContent: 'flex-start',
     alignItems: 'flex-start',
     justifyContent: 'space-between',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 })
 
 export default App
 