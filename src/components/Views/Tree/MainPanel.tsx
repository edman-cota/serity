import { VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import TreeList from './TreeList'
import { RootState } from 'src/store'
import Navbar from '../../Navbar/Navbar'
import { useSplitSizes } from '@hooks/useSplitSizes'

const MainPanel = () => {
  const isOpen = useSelector((state: RootState) => state.isOpen.value)
  const { sizes, paneDisplay } = useSplitSizes()
  const display = isOpen ? paneDisplay.at(0) : paneDisplay.at(1)
  const widths = isOpen ? `${sizes.at(0)}%` : '100%'

  return (
    <VStack w={widths} display={display}>
      <Navbar />
      <TreeList />
    </VStack>
  )
}

export default MainPanel
