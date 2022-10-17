/* eslint-disable operator-linebreak */
import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Flex,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import "./styles.css";
import { setSelectedTaskId } from "../../features/counter/selectedTaskIdSlice.ts";
import { setTask } from "../../features/counter/taskSlice.ts";
import { useGetTags } from "../../hooks/useGetTags";
import ModalBody from "./Modal/Body";
import { Content } from "./styles";

const Body = (props) => {
  const { task } = props;
  const {
    isOpen: isCardOpen,
    onOpen: onCardOpen,
    onClose: onCardClose,
  } = useDisclosure();
  const { tags } = useGetTags();
  const dispatch = useDispatch();
  const { colorMode } = useColorMode();
  const [isDark, setIsDark] = useState(false);

  const modalBg = useColorModeValue("white", "#282e3e");
  const titleColor = useColorModeValue("#585D77", "rgba(255, 255, 255, 0.9)");

  useEffect(() => {
    setIsDark(colorMode === "dark");
  }, [isDark, colorMode]);

  const updateId = (t) => {
    dispatch(setTask(t));
    dispatch(setSelectedTaskId(t.id));
  };

  return (
    <>
      <Content
        isDark={isDark}
        onClick={() => {
          onCardOpen();
          updateId(task);
        }}
      >
        <Text
          fontWeight={400}
          fontSize={15}
          noOfLines={2}
          lineHeight="23px"
          color={titleColor}
        >
          {task.content}
        </Text>
        <Flex>
          {task.tags &&
            tags &&
            tags.map((tag) => {
              if (task.tags.includes(tag.id)) {
                return (
                  <Text
                    key={tag.id}
                    bg={tag.color}
                    borderRadius={4}
                    px={2}
                    py={0}
                    mr={2}
                    fontSize={13}
                    mt={2}
                  >
                    {tag.label}
                  </Text>
                );
              }
              return 0;
            })}
        </Flex>
      </Content>

      <Modal
        isCentered
        onClose={onCardClose}
        isOpen={isCardOpen}
        motionPreset="slideInBottom"
        scrollBehavior="inside"
      >
        <ModalOverlay
          backdropFilter="auto"
          bg="rgb(15, 23, 42/0.8)"
          backdropBlur="3px"
        />
        <ModalContent
          maxW="650px"
          h="100%"
          m="0px"
          bg={modalBg}
          boxShadow="inset 0 1px 0 0 rgb(255 255 255 / 5%)"
        >
          <ModalBody />
        </ModalContent>
      </Modal>
    </>
  );
};

Body.propTypes = {
  task: PropTypes.element,
};

Body.defaultProps = {
  task: {},
};

export default Body;
