import React from 'react'
import { VStack } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

import TreeList from './TreeList'
import { RootState } from 'src/store'
import Navbar from '@components/Navbar/Navbar'
import { useSplitSizes } from '@hooks/useSplitSizes'

const MainPanel = () => {
  const { sizes, paneDisplay } = useSplitSizes()
  const isOpen = useSelector((state: RootState) => state.isOpen.value)
  const widths = isOpen ? `${sizes.at(0)}%` : '100%'
  const display = isOpen ? paneDisplay.at(0) : paneDisplay.at(1)

  return (
    <VStack w={widths} display={display}>
      <Navbar />
      <TreeList />
    </VStack>
  )
}

export default MainPanel
