import React, {FC} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import Contact from '../Screens/Contact';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Stats from '../Screens/Stats';
import {FontAwesome} from '@expo/vector-icons';
import Color from '../Constants/Color';
import {Image, StyleSheet, View} from 'react-native';
import Images from '../assets/Images';

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
  imgPath: ImageSourcePropType;
  focused: boolean;
}) {
  return (
    <>
      {props.focused ? (
        <>
          <View style={styles.highlightedButtonOutside}>
            <View style={styles.highlightedButton}></View>
          </View>
          <Image
            source={props?.imgPath}
            style={[
              styles.tabBarImage,
              {
                tintColor: props.color,
              },
            ]}
            {...props}
          />
        </>
      ) : (
        <View style={styles.buttonContainer}>
          <Image
            source={props?.imgPath}
            style={[
              styles.tabBarImage,
              {
                tintColor: props.color,
              },
            ]}
            {...props}
          />
        </View>
      )}
    </>
  );
}
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Color.secondary,
        tabBarInactiveTintColor: Color.silver,
        tabBarActiveBackgroundColor: Color.primary,
        tabBarInactiveBackgroundColor: Color.primary,
        tabBarStyle: {
          height: 90,
          borderRadius: 20,
          backgroundColor: 'transparent',
          //   borderColor: Color.primary,
          elevation: 0,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              imgPath={Images.house}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Contact"
        component={Contact}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              imgPath={Images.profile}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              imgPath={Images.wallet}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={Stats}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <TabBarIcon
              imgPath={Images.stats}
              color={color}
              focused={focused}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

const MainStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Root"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  buttonWholeContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonImage: {
    height: 20,
    width: 20,
  },
  highlightedButtonOutside: {
    position: 'absolute',
    padding: 5,
    borderRadius: 35,
    top: -25,
  },
  highlightedButton: {
    padding: 20,
    borderRadius: 50,
    backgroundColor: Color.primary,
    borderBottomEndRadiusWidth: 2,
    elevation: 10,
  },
});
export default MainStack;
