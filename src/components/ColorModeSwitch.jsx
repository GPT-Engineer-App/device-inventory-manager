import { useColorMode, Switch, HStack, Text } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch size="md" isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="blue" />
      <Text>{colorMode === "light" ? <FaSun /> : <FaMoon />}</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
