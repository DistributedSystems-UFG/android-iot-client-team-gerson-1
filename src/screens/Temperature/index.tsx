import { HStack, Text, useTheme } from "@react-native-material/core";
import { View } from "react-native";
import useTemperature from "../../query/useTemperature";

interface TemperatureProps {
  toggleTemperature: boolean;
}

export function Temperature({ toggleTemperature }: TemperatureProps) {
  const theme = useTheme();


  const { data: temperature, refetch: refetchLastTemperature } =
    useTemperature();

  const refetchAll = () => {
    refetchLastTemperature();
  };

  return (
    <HStack m={4} spacing={6}>
      <View style={{ width: 150, height: 100, alignItems:'center', justifyContent: 'center' }} >
        <Text
          variant="h5"
          color={theme.palette.primary.main}
          style={{ textAlign: "center", marginBottom: 10 }}
          
        >
          Temperatura
        </Text>
        <Text variant="h5" color="#000" style={{ textAlign: "center" }}>
          {temperature.temperature.toFixed(2)}  ºC  
        </Text>
      </View>
    </HStack>
  );
}
