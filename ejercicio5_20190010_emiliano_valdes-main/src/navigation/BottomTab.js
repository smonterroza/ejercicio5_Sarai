import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

// Pantallas de navegación
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import Admin from '../screens/Admin';


// Navegador Bottom Tabs Navigator
const Tab = createBottomTabNavigator();

export default function BottomTab({ logueado, setLogueado }) {
  // Función para renderizar HomeScreen con props
  const RenderHomeScreen = props => (
    <HomeScreen {...props} setLogueado={setLogueado} logueado={logueado} />
  );

  const RenderAdmin = props => (
    <Admin {...props} setLogueado={setLogueado} logueado={logueado} />
  );

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HomeScreen"
        component={RenderHomeScreen}
        options={{
          title: 'Inicio',
          tabBarActiveTintColor: '#FFC300', // Color activo de la pestaña
          headerStyle: {
            backgroundColor: '#FFC300', // Color del header
          },
          headerTintColor: '#fff', // Color del texto en el header
          tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
            <Ionicons name="home" color={color} size={24} /> // `color` proviene de React Navigation
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={RenderAdmin}
        options={{
          title: 'Admin Screen',
          tabBarActiveTintColor: '#FFC300', // Color activo de la pestaña
          headerStyle: {
            backgroundColor: '#FFC300', // Color del header
          },
          headerTintColor: '#fff', // Color del texto en el header
          tabBarIcon: ({ color }) => ( // Función que define el ícono de la pestaña
            <Ionicons name="person" color={color} size={24} /> // `color` proviene de React Navigation
          ),
        }}
      />
    </Tab.Navigator>
  );
}
