import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }

    navigate("/");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Login
      </Heading>
      <form onSubmit={handleLogin}>
        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormControl>
        {}
        <input type="hidden" name="csrfToken" value="CSRF_TOKEN_HERE" />
        <Button type="submit" colorScheme="blue">
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
