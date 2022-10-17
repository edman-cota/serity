import { HStack } from "@chakra-ui/react";
import LoginForm from "./LoginForm";

const Login = (): JSX.Element => (
  <HStack h="100vh" w="100%" bg="white">
    <LoginForm />
  </HStack>
);

export default Login;
