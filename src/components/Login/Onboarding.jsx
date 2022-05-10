/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { BsCheck2Square } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";
import { Link, Flex, Text, VStack } from "@chakra-ui/react";

const Onboarding = () => (
  <VStack
    bgImage="url('/login-background.png')"
    bgSize="cover"
    bgPos="center"
    h="100%"
    w="55%"
    zIndex="9999"
    color="white"
    display={{ base: "none", xl: "flex" }}
  >
    <Flex h="10vh" px="40px" w="100%">
      <Text display="flex" direction="row" w="200px">
        <Link as={LinkRouter} to="/" alignItems="center" display="flex">
          <BsCheck2Square />
          <Text as="span" pl="5px">
            C o t a
          </Text>
        </Link>
      </Text>
    </Flex>

    <Flex h="80vh" direction="column-reverse" alignItems="center">
      <Text>
        By signing in to Cota, you agree to our <a href="2">terms of use</a> and{" "}
        <Link to="/security-center">privacy policy</Link>
      </Text>
    </Flex>
    <Flex h="10vh" justifyContent="center">
      <Text>
        <Link to="/security-center">Learn more</Link> about how we keep your
        data secure
      </Text>
    </Flex>
  </VStack>
);

export default Onboarding;
