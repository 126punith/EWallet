import React, {FC} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
// import SignInScreen from '@screens/authentication/SignInScreen/SignInScreen';

const Stack = createStackNavigator();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign In"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      {/* <Stack.Screen
        name="Sign In"
        component={SignInScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
