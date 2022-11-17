import { useSelector } from 'react-redux'
import { Flex, Slide, useColorMode, VStack } from '@chakra-ui/react'

import { RootState } from 'src/store'
import NavbarTreeTask from '../Navbar'
import DetailTab from '../../Cards/DetailTab'
import Timeline from '../../Timeline/Timeline'
import { useSplitSizes } from '@hooks/useSplitSizes'
import React from 'react'

const DetailPanel = () => {
  const { colorMode } = useColorMode()
  const isTaskActivityVisible = useSelector((state: RootState) => state.isTaskActivityVisible.value)
  const isOpen = useSelector((state: RootState) => state.isOpen.value)

  const { sizes, paneDisplay } = useSplitSizes()

  const styles = {
    height: '100vh',
    position: 'static',
    display: isOpen ? paneDisplay.at(1) : paneDisplay.at(0),
    width: isOpen ? `${sizes.at(1)}%` : '0%',
    backgroundColor: colorMode === 'dark' ? 'var(--gray-700)' : '#FFFFFF',
    borderLeft: colorMode === 'dark' ? 'none' : '1px solid rgba(0, 0, 0, 0.08)',
  }

  return (
    <Slide in={isOpen} unmountOnExit style={styles}>
      <VStack w='100%'>
        <NavbarTreeTask />
        {isTaskActivityVisible ? (
          <Flex px='16px' w='100%'>
            <Timeline />
          </Flex>
        ) : (
          <Flex w='100%' direction='column'>
            <DetailTab />
          </Flex>
        )}
      </VStack>
    </Slide>
  )
}

export default DetailPanel
