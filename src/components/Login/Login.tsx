import { HStack, LightMode } from "@chakra-ui/react"
import LoginForm from "./LoginForm"

const Login = (): JSX.Element => (
  <LightMode>
    <HStack h="100vh" w="100%" bg="white">
      <LoginForm />
    </HStack>
  </LightMode>
)

export default Login
