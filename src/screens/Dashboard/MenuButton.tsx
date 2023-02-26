import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, useTheme } from "@react-native-material/core";
import { TouchableOpacity } from "react-native";
interface MenuButtonProps {
  icon: any;
  label: string;
  onPress: () => void;
  state?: boolean;
  id: string;
}

export function MenuButton({ icon, label, onPress, state }: MenuButtonProps) {
  const theme = useTheme();
  
  return (
    <TouchableOpacity
      style={{
        width: 150,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: state ? theme.palette.secondary.main : theme.palette.background.main ,
        borderColor: theme.palette.primary.main,
        borderWidth: 1,
        borderRadius: 10,
        margin: 10,
      }}
      activeOpacity={0.6}
      onPress={onPress}
    >
      <Icon  name={icon} size={24}  color={theme.palette.primary.main} style={{
        marginBottom: 10
      }} />
      <Text variant="button" color={theme.palette.primary.main}
        style={{
          textAlign: "center",
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
