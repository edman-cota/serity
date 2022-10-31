import { HStack } from '@chakra-ui/react'
import Sidebar from './Sidebar'
import Content from './Content'

interface Props {
  currentLocale: string
  handleChange: () => void
}

const Settings = ({ currentLocale, handleChange }: Props) => (
  <HStack h="100%" w="100%">
    <Sidebar />
    <Content currentLocale={currentLocale} handleChange={handleChange} />
  </HStack>
)

export default Settings
