import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeClassCreate from '../screens/Home&CreateClass/HomeClassCreate/HomeClassCreate';
import MarketingToolkit from '../screens/MarketingToolkit/MarketingToolkit/MarketingToolkit';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import {Colors} from '../theme/colors';
import FirstTimeUser from '../screens/Home&CreateClass/FirstTimeUser/FirstTimeUser';
import ProfileScreen from '../screens/Profile/ProfileScreen/ProfileScreen';
import {
  homeIcon,
  homeDeactivate,
  myClassesBlank,
  ToolkitBlank,
  accountBlank,
  accountActivate,
  createClassBtn,
  ToolkitActive,
  myClassesActivate,
  ManagementActive,
} from '../assets/index';
import {ClassStack} from './MainStackNavigator';

const {height, width} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const CreateClassBtn = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      bottom: Platform.OS === 'ios' ? 25 : 38,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View
      style={{
        width: 120,
        height: 40,
        borderRadius: 20,
        borderWidth: 0.8,
        borderColor: Colors.forgot_psw,
        backgroundColor: '#F5FCFF',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 74,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeClassCreate}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.container}>
              <Image
                source={focused ? homeIcon : homeDeactivate}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  marginTop: Platform.OS === 'ios' ? 15 : 0,
                  // tintColor: focused ? '#004B87' : '#A8B7C3',
                }}
              />
              <Text
                style={{
                  color: focused ? '#004B87' : '#A8B7C3',
                  fontWeight: '600',
                  fontSize: 10,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="My Classes"
        component={ClassStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? myClassesActivate : myClassesBlank}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  marginTop: Platform.OS === 'ios' ? 15 : 0,
                }}
              />
              <Text
                style={{
                  color: focused ? '#004B87' : '#A8B7C3',
                  fontWeight: '600',
                  fontSize: 10,
                }}>
                My Classes
              </Text>
            </View>
          ),
        }}
      />
      {/* <Tab.Screen
        name="My Classess"
        component={UpcomingClasses}
        options={{tabBarShowLabel: false}}
        // options={{
        //   tabBarIcon: ({focused}) => (
        //     <View style={{alignItems: 'center', justifyContent: 'center'}}>
        //       <Image
        //         source={focused ? myClassesActivate : myClassesBlank}
        //         resizeMode="contain"
        //         style={{
        //           height: 25,
        //           width: 25,
        //           marginTop: Platform.OS === 'ios' ? 15 : 0,
        //         }}
        //       />
        //       <Text
        //         style={{
        //           color: focused ? '#004B87' : '#A8B7C3',
        //           fontWeight: '600',
        //           fontSize: 10,
        //         }}>
        //         My Classes
        //       </Text>
        //     </View>
        //   ),
        // }}
      /> */}
      <Tab.Screen
        name="FirstTimeUser"
        component={FirstTimeUser}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={createClassBtn}
              resizeMode="contain"
              style={{
                height: 20,
                width: 90,
              }}
            />
          ),
          tabBarButton: props => <CreateClassBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Toolkit"
        component={MarketingToolkit}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? ToolkitActive : ToolkitBlank}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  marginTop: Platform.OS === 'ios' ? 15 : 0,
                }}
              />
              <Text
                style={{
                  color: focused ? '#004B87' : '#A8B7C3',
                  fontWeight: '600',
                  fontSize: 10,
                }}>
                Toolkit
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={focused ? accountActivate : accountBlank}
                resizeMode="contain"
                style={{
                  height: 25,
                  width: 25,
                  marginTop: Platform.OS === 'ios' ? 15 : 0,
                }}
              />
              <Text
                style={{
                  color: focused ? '#004B87' : '#A8B7C3',
                  fontWeight: '600',
                  fontSize: 10,
                }}>
                Account
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
});

export default TabNavigator;
