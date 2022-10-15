import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Icon from "./Icon";
import Verbose from "./Verbose";
import ActivityContent from "./ActivityContent";
import "./Activities.scss";
import Time from "./Time";
import Last from "./Last";
import { Activity as ActivityProps } from "../../types/activity.model";

const Activity = ({
  username,
  content,
  description,
  type,
  priority,
  createdAt,
  due,
}: ActivityProps): JSX.Element => {
  return (
    <motion.li className="timeline-item">
      <Flex
        _hover={{ bg: "rgba(35, 131, 226, 0.28)" }}
        borderRadius="10px"
        py="10px"
      >
        <Icon type={type} />

        <Flex
          className="content"
          direction="column"
          w="100%"
          mb="20px"
          mx="20px"
        >
          <Text className="text" fontSize="15px">
            <Text as="span" color="white" pr="30px" fontWeight={700}>
              {/* {username} */}
              Edman Cota
            </Text>
            <Time createdAt={createdAt} />
          </Text>
          <Text className="text" pt="6px">
            <Verbose type={type} />
            <ActivityContent
              type={type}
              content={content}
              description={description}
            />
            <Last type={type} priority={priority} due={due} />
          </Text>
        </Flex>
      </Flex>
    </motion.li>
  );
};

export default Activity;
