import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Icon from "./Icon";
import Verbose from "./Verbose";
import Priority from "./Priority";
import DueDate from "./DueDate";
import "./Activities.scss";
import { timeDifference } from "../../helpers/timeDifference";

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

  const humanDate = new Date(date.getTime());

  const formatAMPM = (date: any) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "pm" : "am";

    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    const strTime = `${hours}:${minutes} ${ampm}`;

    return strTime;
  };

  return (
    <div className="timeline-item">
      <Flex alignItems="center" w="100%">
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
              {username}
            </Text>
            <Verbose type={type} />
            <Text as="span" color="#4772fa" pr="7px">
              {type === 8 ? description : content}
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
              {humanDate.toLocaleDateString("en-US")} - {formatAMPM(humanDate)}
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
