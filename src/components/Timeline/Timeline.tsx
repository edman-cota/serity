import { Flex } from "@chakra-ui/react"
import useGetAllActivities from "../../hooks/useGetAllActivities"
import LoadingScreen from "../EmptyEditor/LoadingScreen"
import TimelineHeader from "./TimelineHeader"
import TimelineBody from "./TimelineBody"

const Activities = () => {
  const { activities, isLoading } = useGetAllActivities()

  return (
    <Flex
      w="100%"
      h="calc(100vh - 108.55px)"
      direction="column"
      mb="20px"
      overflowY="auto"
    >
      <TimelineHeader />
      {isLoading ? <LoadingScreen /> : <TimelineBody activities={activities} />}
    </Flex>
  )
}

export default Activities
