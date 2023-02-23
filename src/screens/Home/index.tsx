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
import { Dimensions, View } from "react-native";

export function Home() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const theme = useTheme()
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
              label="User"
              leading={(props) => <Icon name="account" {...props} />}
            />
            <TextInput
              label="Password"
              leading={(props) => <Icon name="lock" {...props} />}
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
            onPress={() => navigation.navigate("Dashboard" as never)}
            title="Login"
          />
        </Box>
      </VStack>
    </View>
  );
}
