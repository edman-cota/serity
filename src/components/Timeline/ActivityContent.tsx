import { Text, useColorModeValue } from "@chakra-ui/react"

interface Props {
  type: number
  content: string
  description: string
}

const ActivityContent = ({ type, content, description }: Props) => {
  const color = useColorModeValue("gray", "whiteAlpha.700")

  switch (type) {
    case 1:
      return (
        <Text as="span" color={color}>
          {content}
        </Text>
      )
    case 7:
      return (
        <Text as="span" color={color}>
          {content}
        </Text>
      )
    case 8:
      return (
        <Text as="span" color={color}>
          {description}
        </Text>
      )
    default:
      return <Text as="span" color={color}></Text>
  }
}

export default ActivityContent
