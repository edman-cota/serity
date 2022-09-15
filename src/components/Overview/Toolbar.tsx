import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Button, useColorModeValue, Heading } from "@chakra-ui/react";
import { AiOutlineClose } from "react-icons/ai";
import { FormattedMessage } from "react-intl";

const Toolbar = () => {
  const navigate = useNavigate();
  const cardBackground = useColorModeValue("white", "gray.700");

  return (
    <Flex
      w={{ base: "95%", sm: "85%", xl: "1010px" }}
      h={{ base: "56px", xl: "80px" }}
      px={{ base: "30px", xl: "30px" }}
      mt="40px"
      borderRadius="lg"
      alignItems="center"
      justifyContent="space-between"
      bg={cardBackground}
    >
      <Heading size="md">
        <FormattedMessage id="overview" />
      </Heading>
      <Button
        onClick={() => navigate(-1)}
        _active={{ boxShadow: "none" }}
        _focus={{ boxShadow: "none" }}
      >
        <AiOutlineClose />
      </Button>
    </Flex>
  );
};

export default Toolbar;
