import{createAppContainer} from 'react-navigation';
import{createStackNavigator} from 'react-navigation-stack';
import Login from './pages/login';
import Home from './pages/home';

const Router = createAppContainer(
                createStackNavigator({
    Login:{
        screen: Login,
        
    },
    Home:{
        screen:Home,
        navigationOptions:{
        title: "Início",
        }
    },

    },

    {
defautNavigationOptions:{
    headerTintColor:"#fff",
    headerBackTitleVisible: false,
    headerStyle:{
        backgroundColor:"#3F51B5"
    }
}
    }
    )

);

export default Router;