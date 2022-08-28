/* eslint-disable react/prop-types */
import { Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { FormattedMessage } from "react-intl";
import { Link as RouterLink } from "react-router-dom";

const Footer = ({ textId, whereTo }) => (
  <Flex w="440px" px="25px">
    <Text>
      <FormattedMessage id={textId} />
      <Link color="teal.500" as={RouterLink} to={`/${whereTo}`}>
        {" "}
        <FormattedMessage id={whereTo} />
      </Link>
    </Text>
  </Flex>
);

export default Footer;
