import React from "react";
import { Flex, Heading, Img, Text, VStack } from "@chakra-ui/react";
// import WindowsImg from "assets/img/windows.png";
// import LinuxImg from "assets/img/linux.png";

const Download = () => {
  return (
    <VStack px="40px" w="100%" justifyContent="center">
      <Flex>
        <Heading lineHeight="80px" color="#333333">
          Download our app
        </Heading>
      </Flex>
      {/* <Flex gap="30px">
        <Flex>
          <Img src={WindowsImg} w="80px" />
        </Flex>
        <Flex>
          <Img src={WindowsImg} w="80px" />
        </Flex>
        <Flex>
          <Img src={WindowsImg} width="80px" />
        </Flex>
        <Flex>
          <Img src={LinuxImg} width="80px" />
        </Flex>
      </Flex> */}
    </VStack>
  );
};

export default Download;
