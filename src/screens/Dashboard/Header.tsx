import { Avatar, Box, Text, useTheme } from "@react-native-material/core";
import React from "react";
import { Dimensions } from "react-native";

export function Header() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const theme = useTheme();
  return (
    <Box style={{
      backgroundColor: '#5636d3',
      height: 96,
      width: windowWidth,
      paddingHorizontal: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <Box style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Box style={{
          width: 48,
          height: 48,
          borderRadius: 24,
          backgroundColor: '#ff872c',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 16,
        }}>
          <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
        </Box>
        <Text variant="button" color="#fff">
          Olá,
          Sargento
      </Text>
      </Box>
    </Box>
  );
}