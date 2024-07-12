import React, {FC} from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import SignIn from '../Screens/SignIn';
// import SignInScreen from '@screens/authentication/SignInScreen/SignInScreen';

const Stack = createStackNavigator();
const AuthStack: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sign In"
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name="Sign In"
        component={SignIn}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
