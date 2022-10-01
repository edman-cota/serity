import React from "react";
import { HStack } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const Login = (): JSX.Element => (
  <HStack h="100vh" w="100%">
    <LoginForm />
  </HStack>
);

export default Login;
