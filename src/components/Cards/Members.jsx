import React from "react"
import { Flex, Text } from "@chakra-ui/react"

const Members = () => (
  <Flex direction="column" mt="60px">
    <Text mb="10px">Members</Text>
    <Text
      bg="#1F334B"
      border="1px"
      borderRadius="50%"
      w="30px"
      h="30px"
      borderStyle="dotted"
      borderColor="#088CDA"
      borderWidth="2px"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      +
    </Text>
  </Flex>
)

export default Members
