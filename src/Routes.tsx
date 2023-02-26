import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "./screens/Dashboard";
import { Login } from "./screens/Login";

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{ headerShown:false }} />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown:false }}
      />
    </Stack.Navigator>
  );
}
