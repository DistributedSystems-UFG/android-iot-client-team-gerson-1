import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./screens/Dashboard";
import { Home } from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{ headerShown:false }} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerBackButtonMenuEnabled: false, headerBackVisible: false }}
      />
    </Stack.Navigator>
  );
}
