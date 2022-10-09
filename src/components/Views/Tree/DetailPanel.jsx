/* eslint-disable comma-dangle */
import React from "react";
import { Flex, useColorMode, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import DetailTab from "../../Cards/DetailTab";
import NavbarTreeTask from "./Navbar/Navbar";
import Activities from "../../Timeline/Timeline";

import { useSplitSizes } from "../../../hooks/useSplitSizes";

const DetailPanel = () => {
  const { colorMode } = useColorMode();
  const task = useSelector((state) => state.task.value);
  const selectedTaskId = useSelector((state) => state.selectedTaskId.value);
  const isTaskActivityVisible = useSelector(
    (state) => state.isTaskActivityVisible.value
  );

  const { sizes, paneDisplay } = useSplitSizes();

  const styles = {
    flexDirection: "column",
    height: "100vh",
    display: selectedTaskId !== "" ? paneDisplay.at(1) : paneDisplay.at(0),
    width: selectedTaskId !== "" ? `${sizes.at(1)}%` : "0%",
    backgroundColor:
      colorMode === "dark" ? "var(--gray-700)" : "var(--gray-100)",
  };

  return (
    // <AnimatePresence exitBeforeEnter>
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
      // exit={{ opacity: 0 }}
      style={styles}
    >
      <VStack>
        <NavbarTreeTask />
        {isTaskActivityVisible ? (
          <Flex px="16px" w="100%">
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
    // </AnimatePresence>
  );
};

export default DetailPanel;
