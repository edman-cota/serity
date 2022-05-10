import React from "react";
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Icon from "./Icon";
import Verbose from "./Verbose";
import Priority from "./Priority";
import DueDate from "./DueDate";
import "./Activities.scss";

interface ActivityProps {
  username: string;
  content: string;
  description: string;
  type: number;
  priority: number;
  createdAt: string;
  due: string;
}

// previous: miliseconds
const timeDifference = (previous: number, locale: string): string => {
  var msPerMinute = 60 * 1000;
  var msPerHour = msPerMinute * 60;
  var msPerDay = msPerHour * 24;
  var msPerMonth = msPerDay * 30;
  var msPerYear = msPerDay * 365;

  const current = Date.now();
  var elapsed = current - previous;

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (elapsed < msPerMinute) {
    // return <FormattedMessage id="just_now" />;
    return "just now";
  } else if (elapsed < msPerHour) {
    return rtf.format(-Math.floor(elapsed / msPerMinute), "minutes");
  } else if (elapsed < msPerDay) {
    return rtf.format(-Math.floor(elapsed / msPerHour), "hours");
  } else if (elapsed < msPerMonth) {
    // return Math.round(elapsed / msPerDay) + " days ago";
    return rtf.format(-Math.floor(elapsed / msPerDay), "days");
  } else if (elapsed < msPerYear) {
    // return Math.round(elapsed / msPerMonth) + " months ago";
    return rtf.format(-Math.floor(elapsed / msPerMonth), "months");
  } else {
    // return Math.round(elapsed / msPerYear) + " years ago";
    return rtf.format(-Math.floor(elapsed / msPerYear), "years");
  }
};

// username, content, type, priority, due, dateAdded;

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
