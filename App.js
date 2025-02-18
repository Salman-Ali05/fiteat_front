import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/TrainHome';
import Orders from './pages/Orders';

// Création du stack navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TrainHome" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="OrdersHome" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
