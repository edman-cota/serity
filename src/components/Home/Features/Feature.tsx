import { GridItem, Heading, Text } from '@chakra-ui/react'

interface Props {
  icon: React.ReactElement
  title: String
  description: String
}

const Feature = ({ icon, title, description }: Props) => {
  return (
    <GridItem textAlign='center' p='1rem' color='black'>
      <Text display='flex' justifyContent='center'>
        {icon}
      </Text>
      <Text fontSize='xl' fontWeight='bold' py='1rem'>
        {title}
      </Text>
      <Text color='#737373'>{description}</Text>
    </GridItem>
  )
}

export default Feature
