import { HStack, useTheme } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Dimensions, View } from "react-native";
import { Temperature } from "../Temperature";
import { Header } from "./Header";
import { MenuButton } from "./MenuButton";
export function Dashboard() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const theme = useTheme();

  const [blueLed, setBlueLed] = useState(false);
  const [redLed, setRedLed] = useState(false);
  const [toggleTemperature, setToggleTemperature] = useState(false);


  function handleLogout() {
    navigation.navigate("Home");
  }

  function lightBlueLed() {
    setBlueLed(!blueLed);
  }

  return (
    <View
      style={{
        height: windowHeight,
        width: windowWidth,
        alignItems: "center",
        backgroundColor: theme.palette.background.main,
      }}
    >
      <Header/>
      <HStack mt={20} spacing={2} wrap="wrap" center>
        <MenuButton
          icon={blueLed ?  "led-on" : "led-off"}
          label="Blue led"
          onPress={() => lightBlueLed()}
          state={blueLed}
        />
        <MenuButton
          icon={redLed ?  "led-on" : "led-off"}
          label="Red led"
          onPress={() => setRedLed(!redLed)}
          state={redLed}
        />
        <MenuButton
          icon="temperature-celsius"
          label="Temperature"
          onPress={() => setToggleTemperature(!toggleTemperature)}
        />
        <MenuButton
          icon="logout"
          label="logout"
          onPress={() => handleLogout()}

        />
      </HStack>

      {
        toggleTemperature && <Temperature toggleTemperature={toggleTemperature} />
      }
    </View>
  );
}
