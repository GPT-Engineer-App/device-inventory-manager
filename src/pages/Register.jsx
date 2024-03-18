import { useState } from "react";
import { Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    console.log("Registration attempt");

    if (!name || !email || !password) {
      alert("Please provide name, email, and password.");
      return;
    }

    const csrfToken = document.querySelector('meta[name="csrf-token"]').content;

    navigate("/login");
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Register
      </Heading>
      <FormControl mb={4}>
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Email</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Password</FormLabel>
        <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </FormControl>
      <input type="hidden" name="_csrf" value={csrfToken} />
      <Button colorScheme="blue" onClick={handleRegister}>
        Register
      </Button>
    </Box>
  );
};

export default Register;
