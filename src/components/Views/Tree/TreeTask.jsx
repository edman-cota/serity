/* eslint-disable comma-dangle */
import React from "react";
import { Flex, useColorMode, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";

import DetailTab from "../../Cards/DetailTab";
import NavbarTreeTask from "./Navbar/Navbar";
import Activities from "../../Activities/Activities";

const TreeTrask = () => {
  const task = useSelector((state) => state.task.value);
  const { colorMode } = useColorMode();
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);
  const isTaskActivityVisible = useSelector(
    (state) => state.isTaskActivityVisible.value
  );

  const styles = {
    flexDirection: "column",
    // position: "fixed",
    right: 0,
    top: 0,
    bottom: 0,
    height: "100vh",
    display: selectedTaskId !== "" ? "flex" : "none",
    backgroundColor:
      colorMode === "dark" ? "var(--gray-700)" : "var(--gray-100)",
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        exit={{ opacity: 0 }}
        style={styles}
      >
        <VStack>
          <NavbarTreeTask />
          {isTaskActivityVisible ? (
            <Flex px="16px">
              <Activities />
            </Flex>
          ) : (
            <Flex w="100%" direction="column">
              <DetailTab
                key={task.id}
                taskId={task.id}
                dueDate={task.due}
                priority={task.priority}
                title={task.content}
              />
            </Flex>
          )}
        </VStack>
      </motion.div>
    </AnimatePresence>
  );
};

export default TreeTrask;
