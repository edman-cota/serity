import React from "react";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
} from "@chakra-ui/react";
import CompletionCurveChartDay from "./CompletionCurveChartDay";
import CompletionCurveChartMonth from "./CompletionCurveChartMonth";
import { FormattedMessage } from "react-intl";

const CompletionCurve = (): JSX.Element => {
  const cardBackground = useColorModeValue("white", "#1F2733");

  return (
    <Flex
      w={{ base: "95%", sm: "85%", xl: "490px" }}
      mx={{ base: "auto", xl: "15px" }}
      mt={{ base: "16px", xl: "20px" }}
      px={{ base: "15px", md: "25px", xl: "20px" }}
      h="284px"
      borderRadius="8px"
      bg={cardBackground}
    >
      <Tabs variant="unstyled" w="100%" h="100%" align="center" pt="20px">
        <TabList>
          <Tab
            bg="#1a202c"
            fontSize="12px"
            borderRadius="18px"
            p="1px 17px"
            lineHeight="24px"
            minWidth="65px"
            mr="8px"
            _selected={{
              color: "#4772fa",
              bg: "rgba(71, 114, 250, .2)",
              boxShadow: "none",
              alignItems: "center",
            }}
          >
            <FormattedMessage id="day" />
          </Tab>
          <Tab
            bg="#1a202c"
            py="1px 17px"
            fontSize="12px"
            borderRadius="18px"
            lineHeight="24px"
            minWidth="65px"
            ml="8px"
            _selected={{
              color: "#4772fa",
              bg: "rgba(71, 114, 250, .2)",
              boxShadow: "none",
              alignItems: "center",
            }}
          >
            <FormattedMessage id="month" />
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel px="4px">
            <CompletionCurveChartDay />
          </TabPanel>
          <TabPanel px="4px">
            <CompletionCurveChartMonth />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default CompletionCurve;
