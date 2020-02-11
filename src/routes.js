import {createAppContainer, createStackNavigator} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import Login from './pages/login';
import Home from './pages/home';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: Login,
      Home: Home,
    },

    // {
    //   defautNavigationOptions: {
    //     headerTintColor: '#fff',
    //     headerBackTitleVisible: false,
    //     // headerStyle: {
    //     //   backgroundColor: '#3F51B5',
    //     // },
    //   },
    // },
  ),
);

export default Routes;
