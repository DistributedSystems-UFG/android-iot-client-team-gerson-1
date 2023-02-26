import { Flex, useTheme } from "@react-native-material/core";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Dimensions, View } from "react-native";
import { useMutation } from "react-query";
import useDevices from "../../query/useDevices";
import api from "../../services/api";
import { Temperature } from "../Temperature";
import { Header } from "./Header";
import { MenuButton } from "./MenuButton";
export function Dashboard() {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const navigation = useNavigation();
  const theme = useTheme();
  const [toggleTemperature, setToggleTemperature] = useState(false);



  const [checkPairs, setCheckPairs] = React.useState<any>({});

  const { data, refetch } = useDevices();

  const blink = useMutation(
    async (params: any) =>
      await api.patch(`/blink/${params.id}/${params.state}`),
    {
      onSuccess: (data, variables, context) => {
        setCheckPairs({
          ...checkPairs,
          [variables.id]: checkPairs[variables.id] === "ON" ? "OFF" : "ON",
        });
      },
      onError: () => {
        Alert.alert("Não foi possível acessar o dispositivo informado!");
      },
    }
  );

  useEffect(() => {
    if (data) {
      let pair: any = {};
      data.devices.forEach((device: any) => {
        pair[device.id] = device.state;
      });
      setCheckPairs(pair);
    }
  }, [data]);

  const handleToggle = (value: string) => {
    blink.mutate({
      id: value,
      state: checkPairs[value] === "ON" ? "OFF" : "ON",
    });
  };

  function hasTemperatureSensorAndIsTurnedOn() {
    if (data) {
      for (const device of data.devices) {
        if (device.type === "SENSOR" && device.state === "ON") {
          return true;
        }
      }
    }
    return false;
  }

  function getIcon(device: any) {
    if (device.type === "LED") {
      return checkPairs[device.id] === "ON" ? "led-on" : "led-off";
    }
    return "temperature-celsius";
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
      <Header />
      <Flex >
        {data?.devices.map((device: any) => (
          <MenuButton
            key={device.id}
            icon={getIcon(device)}
            id={device.id}
            label={device.name}
            onPress={() => handleToggle(device.id)}
            state={checkPairs[device.id] === "ON"}
          />
        ))}

      </Flex>

      {hasTemperatureSensorAndIsTurnedOn() && (
        <Temperature toggleTemperature={toggleTemperature} />
      )}
    </View>
  );
}
