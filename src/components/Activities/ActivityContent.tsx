import React from "react";
import { Text } from "@chakra-ui/react";

interface Props {
  type: number;
  content: string;
  description: string;
}

const ActivityContent = ({
  type,
  content,
  description,
}: Props): JSX.Element => {
  switch (type) {
    case 1:
      return <Text as="span">{content}</Text>;
    case 7:
      return <Text as="span">{content}</Text>;
    case 8:
      return <Text as="span">{description}</Text>;
    default:
      return <Text as="span"></Text>;
  }
};

export default ActivityContent;
