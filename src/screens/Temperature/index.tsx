import { HStack, Text, useTheme } from "@react-native-material/core";
import { useEffect, useState } from "react";
import { View } from "react-native";

interface TemperatureProps {
  toggleTemperature: boolean;
}

export function Temperature({ toggleTemperature }: TemperatureProps) {
  const theme = useTheme();

  const [temperature, setTemperature] = useState('0.0');

  function generateRandomTemperature() {
    return (Math.random() * (40.0 - 35.0) + 35.0).toFixed(1);
  }

  // keep updating the temperature in  loop
  useEffect(() => {
    if(toggleTemperature){
      const interval = setInterval(() => {
        setTemperature(generateRandomTemperature());
      }, 1500);
      return () => clearInterval(interval);
    }
  }, []);


  return (
    <HStack m={4} spacing={6}>
      <View style={{ width: 150, height: 100, alignItems:'center', justifyContent: 'center' }} >
        <Text
          variant="h5"
          color={theme.palette.primary.main}
          style={{ textAlign: "center", marginBottom: 10 }}
          
        >
          Temperature
        </Text>
        <Text variant="h5" color="#000" style={{ textAlign: "center" }}>
          {temperature}
        </Text>
      </View>
    </HStack>
  );
}
