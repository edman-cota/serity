import {
  Flex,
  Text,
  HStack,
  VStack,
  useColorModeValue,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react"
import { motion, AnimatePresence, isValidMotionProp } from "framer-motion"
import { FormattedMessage } from "react-intl"
import { useGetAchievement } from "../../hooks/useGetAchievement"
import { calculatePercentage } from "../../helpers/calculatePercentage"

const MotionFlex = chakra(motion.div, {
  /**
   ** Allow motion props and non-chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
})

const AchievementCard = () => {
  const { tasks, completedTasks } = useGetAchievement()
  const cardBackground = useColorModeValue("white", "gray.700")

  return (
    <AnimatePresence>
      <MotionFlex
        w={{ base: "95%", sm: "85%", xl: "490px" }}
        mx={{ base: "auto", xl: "15px" }}
        mt={{ base: "16px", xl: "20px" }}
        borderRadius="lg"
        p="30px"
        h="284px"
        bg={cardBackground}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        // transition={{ duration: 0.25 }}
      >
        <VStack alignItems="start" h="180">
          <Text fontSize="28px">
            <b>{calculatePercentage(completedTasks.length, tasks.length)}</b>
            <small> %</small>
          </Text>
          <Text>
            <FormattedMessage id="complete" />
          </Text>
        </VStack>
        <HStack justifyContent="space-between" w="100%" h="30px">
          <Text fontSize="14px">
            <b>{completedTasks.length}</b> <FormattedMessage id="done" />
          </Text>
          <Text fontSize="14px">
            <b>{tasks.length}</b> <FormattedMessage id="pending" />
          </Text>
          <Text fontSize="14px">
            <b>{tasks.length + completedTasks.length}</b>{" "}
            <FormattedMessage id="total" />
          </Text>
        </HStack>
      </MotionFlex>
    </AnimatePresence>
  )
}

export default AchievementCard
