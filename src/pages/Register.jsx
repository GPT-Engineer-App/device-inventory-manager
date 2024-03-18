import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
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
    if (name.length < 1) {
      alert("Please enter your name.");
      return;
    }

    navigate("/login");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Register
      </Heading>
      <form onSubmit={handleRegister}>
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>
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
          Register
        </Button>
      </form>
    </Box>
  );
};

export default Register;
