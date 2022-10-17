import React from "react";
import { HStack } from "@chakra-ui/react";
import RegisterForm from "./RegisterForm";

const Register = (): JSX.Element => (
  <HStack h="100vh" w="100%" bg="white">
    <RegisterForm />
  </HStack>
);

export default Register;
