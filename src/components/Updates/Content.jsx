import { Flex, Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import updates from "./data";
import Update from "./Update";
import "../Activities/Activities.scss";
import "../Activities/Activity.scss";

const Content = () => {
  const isSidebarOpen = useSelector((state) => state.isSidebarOpen.value);

  const margin = isSidebarOpen ? "320px" : "0px";

  return (
    <VStack flex={1} ml={margin} w="100%">
      <Flex h="80px" w="100%" alignItems="center">
        <Flex w="90%" mx="auto">
          <Text>Updates</Text>
        </Flex>
      </Flex>
      <Flex
        h="calc(100vh - 108.55px)"
        direction="column"
        w="90%"
        mx="auto"
        mt="30px"
        mb="20px"
        overflowY="auto"
      >
        <div className="timeline">
          <div className="timeline-body">
            {updates.map((data) => (
              <Update key={data.id} data={data} />
            ))}
          </div>
        </div>
      </Flex>
    </VStack>
  );
};

export default Content;
