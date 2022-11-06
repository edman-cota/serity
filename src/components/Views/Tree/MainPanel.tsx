import { VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import TreeList from './TreeList'
import { RootState } from 'src/store'
import Navbar from '../../Navbar/Navbar'
import { useSplitSizes } from '@hooks/useSplitSizes'

const MainPanel = () => {
  const { sizes, paneDisplay } = useSplitSizes()
  const selectedTaskId = useSelector((state: RootState) => state.selectedTaskId.value)
  const display = selectedTaskId !== '' ? paneDisplay.at(0) : paneDisplay.at(1)
  const widths = selectedTaskId !== '' ? `${sizes.at(0)}%` : '100%'

  return (
    <VStack w={widths} display={display}>
      <Navbar />
      <TreeList />
    </VStack>
  )
}

export default MainPanel
