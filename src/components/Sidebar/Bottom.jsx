import React from "react";
import PropTypes from "prop-types";
import { VStack, Button, Text } from "@chakra-ui/react";
import { NavLink as RouteLink } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcFlashOn } from "react-icons/fc";
import { IoMdHelp } from "react-icons/io";
import { auth } from "../../firebase";

const Bottom = () => {
  const [user] = useAuthState(auth);
  const username = user?.email.split("@")[0];

  return (
    <VStack w="100%" h="120px">
      <RouteLink
        to={`/${username}/updates`}
        style={{ width: "90%" }}
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <NavLink text="Updates" icon={<FcFlashOn />} />
      </RouteLink>
      <RouteLink
        to={`/${username}/feedback`}
        style={{ width: "90%" }}
        className={(navData) => (navData.isActive ? "active" : "")}
      >
        <NavLink text="Help &amp; Feedback" icon={<IoMdHelp />} />
      </RouteLink>
    </VStack>
  );
};

const NavLink = ({ text, icon }) => (
  <Button
    display="flex"
    px="10px"
    h="38px"
    w="100%"
    justifyContent="start"
    color="rgba(255, 255, 255, 0.6)"
    borderRadius="base"
    bg="transparent"
    _hover={{ backgroundColor: "gray.800" }}
    _active={{ backgroundColor: "gray.800" }}
    _focus={{ outline: "none" }}
  >
    <Text as="span" w="30px">
      {icon}
    </Text>
    <Text as="span">{text}</Text>
  </Button>
);

NavLink.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

NavLink.defaultProps = {
  text: "",
  icon: "",
};

export default Bottom;
