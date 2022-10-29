import { Text } from "@chakra-ui/react"
import { formatAMPM } from "../../helpers/formatAMPM"

interface Props {
  createdAt: string
}

const Time = ({ createdAt }: Props) => {
  const date = new Date(createdAt)

  return (
    <Text as="span" fontSize="14px" color="whiteAlpha.700">
      {new Date(date.getTime()).toLocaleDateString("en-US")} -{" "}
      {formatAMPM(new Date(date.getTime()))}
    </Text>
  )
}

export default Time
