import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import TrainHome from './pages/TrainHome';
import OrdersHome from './pages/Orders';
import Activities from './pages/Activities';

// Création du stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TrainHome" component={TrainHome} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OrdersHome" component={OrdersHome} />
        <Stack.Screen name="Activities" component={Activities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
