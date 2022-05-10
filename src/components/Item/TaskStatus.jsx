import React from "react";
import PropTypes from "prop-types";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { HiOutlineViewBoards } from "react-icons/hi";

const TaskStatus = ({ columnTitle }) => {
  const primaryColor = useColorModeValue("#202020", "#FFFFFF");

  return (
    <Flex w="100%" alignItems="center">
      <Text
        w="26px"
        h="26px"
        bg="#1F334B"
        mr="6px"
        borderRadius="50%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <HiOutlineViewBoards color="#7957D1" fontSize="14px" />
      </Text>
      <Text fontSize="15px" pl="10px" color={primaryColor} fontWeight="400">
        {columnTitle}
      </Text>
    </Flex>
  );
};

TaskStatus.propTypes = {
  columnTitle: PropTypes.string,
};

TaskStatus.defaultProps = {
  columnTitle: "",
};

export default TaskStatus;
