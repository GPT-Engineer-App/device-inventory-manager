import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login attempt");

    if (!email || !password) {
      alert("Please provide both email and password.");
      return;
    }

    navigate("/");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Login
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
