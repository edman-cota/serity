import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useSplitSizes } from '@hooks/useSplitSizes'
import { RootState } from 'src/store'

function PanelContent(props: any) {
  const { sizes, paneDisplay } = useSplitSizes()
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('PanelContent', { variant })
  const isSidebarOpen = useSelector((state: RootState) => state.isSidebarOpen.value)
  const isOpen = useSelector((state: RootState) => state.isOpen.value)
  const margin = isSidebarOpen ? '280px' : '0px'
  const widths = isOpen ? `${sizes.at(0)}%` : '100%'
  const display = isOpen ? paneDisplay.at(0) : paneDisplay.at(1)

  return (
    <Box __css={styles} {...rest} w={widths} display={display} ml={margin} h='100%' flex={1}>
      {children}
    </Box>
  )
}

export default PanelContent
