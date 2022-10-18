import { Button, Flex, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { HiOutlineChevronDown } from "react-icons/hi";

const Toolbar = () => {
  return (
    <Flex justifyContent="space-between" w="90%" pl="14px">
      <Flex alignItems="center">
        <Text>Projects</Text>
      </Flex>
      <Flex>
        <Button>
          <AiOutlinePlus />
        </Button>
        <Button>
          <HiOutlineChevronDown />
        </Button>
      </Flex>
    </Flex>
  );
};

export default Toolbar;
