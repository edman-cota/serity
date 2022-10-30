import { VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import Navbar from '../../Navbar/Navbar'

import TreeList from './TreeList'
import type { RootState } from '../../../store'
import { useSplitSizes } from '../../../hooks/useSplitSizes'

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
