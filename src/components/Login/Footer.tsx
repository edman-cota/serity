/* eslint-disable react/prop-types */
import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  textId: string;
  whereTo: string;
}

const Footer: React.FC<Props> = (props) => {
  return (
    <Flex w="440px" px="25px">
      <Text>
        <FormattedMessage id={props.textId} />
        <Link color="teal.500" as={RouterLink} to={`/${props.whereTo}`}>
          {" "}
          <FormattedMessage id={props.whereTo} />
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
