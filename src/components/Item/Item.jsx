/* eslint-disable object-curly-newline */
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Flex, HStack, ListItem, useColorModeValue } from "@chakra-ui/react";
import RenderStatus from "../RenderStatus/RenderStatus";
import ItemTitle from "./ItemTitle";
import ItemMenu from "./ItemMenu.tsx";
import "./Item.scss";

const Item = ({ task, index }) => {
  const activeIndex = useSelector((state) => state.activeIndex.value);
  const hover = useColorModeValue("gray.200", "gray.700");

  return (
    <ListItem
      className={`tree-row${index === activeIndex ? " selected" : ""}`}
      borderRadius="4px"
      cursor="pointer"
      _hover={{ background: hover }}
      role="group"
    >
      <HStack h="40px">
        <Flex px="10px">
          <RenderStatus task={task} />
        </Flex>
        <Flex flex={1} alignItems="center" height="100%">
          <ItemTitle task={task} index={index} />
          <ItemMenu task={task} />
        </Flex>
      </HStack>
    </ListItem>
  );
};

Item.propTypes = {
  task: PropTypes.shape({}).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
