import React from "react";
import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.ts";

const UserAvatar = () => {
  const [user] = useAuthState(auth);

  return (
    <Flex alignItems="center" flex="1">
      <Flex>
        <Avatar src={user?.photoURL} w="8" h="8" />
      </Flex>
      <Flex direction="column" px="10px">
        <Text>{user?.displayName}</Text>
      </Flex>
    </Flex>
  );
};

export default UserAvatar;
