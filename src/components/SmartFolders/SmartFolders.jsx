import React from "react";
import PropTypes from "prop-types";
import { VStack, Text } from "@chakra-ui/react";
import { NavLink as RouteLink } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import "./SmartFolders.scss";

const SmartFolders = () => {
  const [user] = useAuthState(auth);
  const username = user?.email.split("@")[0];
  let view = localStorage.getItem("view");

  if (!view) {
    view = "tree";
  }

  const today = "today";

  return (
    <VStack w="100%" my="50px">
      <RouteLink
        to={`/web/${username}/p/${today}?view=${view}`}
        style={{ width: "90%" }}
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <NavLink text="today" icon="⭐" />
      </RouteLink>
    </VStack>
  );
};

const NavLink = ({ text, icon }) => (
  <Text
    display="flex"
    w="100%"
    px="10px"
    h="38px"
    borderRadius="base"
    alignItems="center"
    _hover={{ backgroundColor: "gray.800" }}
  >
    <span style={{ width: "30px" }}>{icon}</span>
    <span>
      <FormattedMessage id={text} />
    </span>
  </Text>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default SmartFolders;
