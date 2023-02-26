import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Avatar, Box, Text, useTheme } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useAtom } from "jotai";
import React from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import useMe from "../../query/useMe";
import authAtom from "../../store/auth";
export function Header() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const theme = useTheme();

  const { data } = useMe();
  const [token, setToken] = useAtom(authAtom);
  const navigation = useNavigation();
  function handleLogout() {
    setToken(undefined);
    navigation.navigate("Login");
  }
  return (
    <Box
      style={{
        paddingTop: windowHeight / 20,
        backgroundColor: "#5636d3",
        height: windowHeight / 6,
        width: windowWidth,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#ff872c",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 16,
          }}
        >
          <Avatar
            image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }}
          />
        </Box>
        <Text variant="button" color="#fff">
          Olá, {data?.name}
        </Text>
      </Box>
      <TouchableOpacity
        onPress={() => handleLogout()}
      >
        <Text variant="button" color="#fff">
          <Icon name="logout" size={24} color="#fff" />
        </Text>
      </TouchableOpacity>

    </Box>
  );
}
