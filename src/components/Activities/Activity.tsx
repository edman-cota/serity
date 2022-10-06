import React from "react";
import { Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import Icon from "./Icon";
import Verbose from "./Verbose";
import Priority from "./Priority";
import ActivityContent from "./ActivityContent";
import DueDate from "./DueDate";
import "./Activities.scss";
import { timeDifference } from "../../helpers/timeDifference";
import { formatAMPM } from "../../helpers/formatAMPM";

interface ActivityProps {
  username: string;
  content: string;
  description: string;
  type: number;
  priority: number;
  createdAt: string;
  due: string;
}

const Activity = ({
  username,
  content,
  description,
  type,
  priority,
  createdAt,
  due,
}: ActivityProps): JSX.Element => {
  var date = new Date(createdAt);

  const color = useColorModeValue(
    "rgba(24, 29, 37, 0.6)",
    "rgba(255, 255, 255, 0.5)"
  );

  return (
    <div className="timeline-item">
      <Flex>
        <Icon type={type} />

        <Flex
          className="content"
          direction="column"
          w="100%"
          mb="20px"
          ml="20px"
        >
          <Text pr="7px" className="text" fontSize="15px">
            <Text as="span" color="#4772fa" pr="7px">
              {/* {username} */}
              Edman Cota
            </Text>
            <Verbose type={type} />
            <Text as="span" color="#4772fa">
              <ActivityContent
                type={type}
                content={content}
                description={description}
              />
            </Text>
            {type === 2 ? <Priority priority={priority} /> : null}
            {type === 3 ? <DueDate due={due} /> : null}
          </Text>
          <Text
            color={color}
            fontSize="14px"
            mt="4px"
            display="flex"
            justifyContent="space-between"
            pr="20px"
          >
            {timeDifference(date.getTime(), "en")}
            <Text as="span">
              {new Date(date.getTime()).toLocaleDateString("en-US")} -{" "}
              {formatAMPM(new Date(date.getTime()))}
            </Text>
          </Text>
        </Flex>
      </Flex>
    </div>
  );
};

// <VStack fontSize='lg' fontWeight='thin' transform='rotate(180deg)'>
//     <Text transform='rotate(90deg)'>©</Text>
//     <Text sx={{ writingMode: 'vertical-lr', textOrientation: 'mixed' }}>
//       {new Date().getFullYear() + ' '}
//       <Text as='span' color={mode(LIGHT_BLUE_COLOR, DARK_BLUE_COLOR)}>
//         Alexandre Gossard
//       </Text>
//       .
//     </Text>
//   </VStack>

export default Activity;
