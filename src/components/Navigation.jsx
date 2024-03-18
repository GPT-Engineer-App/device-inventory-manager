import { Box, Flex, Spacer, Button, useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

const Navigation = () => {
  const { colorMode } = useColorMode();
  return (
    <Box bg={colorMode === "light" ? "gray.100" : "gray.700"} py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Box>
          <Link to="/">Inventory Management System</Link>
        </Box>
        <Spacer />
        <Box>
          <Link to="/login">
            <Button colorScheme={colorMode === "light" ? "blue" : "gray"} mr={4}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme={colorMode === "light" ? "green" : "gray"}>Register</Button>
          </Link>
          <ColorModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
