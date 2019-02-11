import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Notifications from '../screens/Notifications';
import Geolocation from '../screens/Geolocalion';
import Home from '../screens/Home';
import Rewards from '../screens/Rewards';
import Support from '../screens/Support';
import Profile from '../screens/Profile';
import AuthLoading from '../navigation/AuthLoading';
import AppDrawer from '../navigation/AppDrawer';

const AuthStack = createStackNavigator({
  SignIn,
  SignUp,
  ForgotPassword,
});

const MainStack = createBottomTabNavigator({
  Home,
  Rewards,
  Support
});

const AppStack = createDrawerNavigator(
  {
    Home: MainStack,
    Profile: {
      screen: Profile,
      navigationOptions: () => ({
        drawerLabel: "Profile & Settings"
      }),
    },
    Geolocation,
    Notifications,
  },
  { 
    drawerPosition: 'right',
    contentComponent: AppDrawer
  }
);

const AppNavigator = createAppContainer(createSwitchNavigator(
  {
    AuthStack,
    AppStack,
    AuthLoading
  },
  {
    initialRouteName: 'AuthLoading'
  }
));

export default AppNavigator;
