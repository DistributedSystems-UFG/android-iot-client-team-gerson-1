import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import {
  Box,
  Button,
  Stack,
  Text,
  TextInput,
  VStack,
  useTheme,
} from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import api from "../../services/api";
import authAtom from "../../store/auth";

export function Login() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const theme = useTheme()


  const [token, setToken] = useAtom(authAtom);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      api.defaults.headers["Authorization"] = token;
      navigation.navigate("Dashboard");
    }
  }, [token]);

  const handleSubmit = async () => {
    const response = await api.post("/auth/login", {
      email,
      password,
    });
    setToken(response.data.token);
  };

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.palette.background.main
      }}
    >
      <VStack m={4} spacing={2}>
        <Box
          style={{
            height: windowHeight / 3,
            width: windowWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text variant="h5" color={
            theme.palette.primary.main
          }>Login</Text>
        </Box>
        <Box
          h={12}
          style={{
            height: windowHeight / 3,
            width: windowWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stack spacing={2}  style={{  width: windowWidth, paddingHorizontal: 20 }}>
            <TextInput
              label="E-mail"
              leading={(props) => <Icon name="account" {...props} />}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TextInput
              label="Password"
              leading={(props) => <Icon name="lock" {...props} />}
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              secureTextEntry
              autoCorrect={false}
            />
          </Stack>
        </Box>
        <Box
          h={12}
          style={{
            height: windowHeight / 3,
            width: windowWidth,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onPress={() => handleSubmit()}
            title="Login"
          />
        </Box>
      </VStack>
    </View>
  );
}
