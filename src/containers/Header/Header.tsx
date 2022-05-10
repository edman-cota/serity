import React from "react";
import { Button, Flex, Text, VStack, HStack } from "@chakra-ui/react";
import UIImage from "../../assets/img/UI.svg";
import { AiFillPlayCircle } from "react-icons/ai";

const Header = (): JSX.Element => {
  return (
    <Flex px="73px" py="42px" bg="#1f2733">
      <HStack
        px={{ base: "1.5rem", sm: "3rem", lg: "4rem", xl: "4rem" }}
        // py="2rem"
        h="calc(100vh - 85px)"
        // bg="white"
        // mt="90px"
      >
        <VStack pt="60px" w="100%" justifyContent="start">
          <Text
            w="100%"
            fontWeight="extrabold"
            bgGradient="linear(90deg, #007CF0, #00DFD8)"
            bgClip="text"
            // color="white"
            lineHeight={{ base: "40px", sm: "48px", lg: "60px" }}
            fontSize={{ base: "26px", sm: "36px", md: "40px", lg: "60px" }}
          >
            Simple.Fast.Delightful
            <br />
            <Text as="span" color="white" lineHeight="100px">
              to-do list
            </Text>
          </Text>
          <Text
            display="flex"
            alignSelf="self-start"
            color="white"
            w="100%"
            maxW="600px"
            fontSize="20px"
            lineHeight="28px"
            pt="1.5rem"
          >
            We want to bring satisfaction to every interaction. Focused on fast
            and delightful user experience.
          </Text>

          <Flex w="100%" pt="40px" gap="40px">
            <Button
              px="30px"
              h="50px"
              bgGradient="linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)"
              _hover={{
                bgGradient:
                  "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
                boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
              }}
              _active={{
                bgGradient:
                  "linear(105.23deg, #01A4FF 33.35%, #01FFC2 115.77%)",
                boxShadow: "0 2px 6px 0 rgb(0 118 255 / 39%)",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              Download now
            </Button>
            <Button
              h="50px"
              px="20px"
              border="1px"
              color="white"
              display="flex"
              justifyContent="space-between"
              gap="10px"
              background="transparent"
              borderColor="hsla(0, 0%, 100%, 0.6)"
              _hover={{
                background: "#fff",
                borderColor: "#fff",
                color: "rgba(0, 0, 0, 0.9)",
                boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
              }}
              _active={{
                background: "#fff",
                borderColor: "#fff",
                color: "rgba(0, 0, 0, 0.9)",
                boxShadow: "0 6px 20px rgb(0 118 255 / 23%)",
              }}
              _focus={{
                boxShadow: "none",
              }}
            >
              <AiFillPlayCircle />
              <Text as="span">Watch Demo</Text>
            </Button>
          </Flex>
        </VStack>
        <Flex mt="100px">
          <img src={UIImage} alt="Todo example" />
        </Flex>
      </HStack>
    </Flex>
  );
};

export default Header;
