import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";
import DetailScreen from "../screens/DetailScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer> 
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#F5F5DC' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
