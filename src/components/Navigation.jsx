import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import ColorModeSwitch from "./ColorModeSwitch";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex maxW="container.lg" mx="auto" align="center">
        <Box>
          <Link to="/">Inventory Management System</Link>
        </Box>
        <Spacer />
        <Box>
          <Link to="/login">
            <Button colorScheme="blue" mr={4}>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button colorScheme="green" mr={4}>
              Register
            </Button>
          </Link>
          <ColorModeSwitch />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navigation;
