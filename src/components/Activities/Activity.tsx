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

  console.log(username);

  const color = useColorModeValue("rgba(24, 29, 37, 0.6)", "#eeeeee");

  return (
    <div className="timeline-item">
      <Flex alignItems="center" w="100%">
        <Icon type={type} />

        <div className="content">
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
          <Text color={color} fontSize="14px" mt="4px">
            {timeDifference(date.getTime(), "en")}
          </Text>
        </div>
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
