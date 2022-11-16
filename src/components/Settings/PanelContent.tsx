import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

function PanelContent(props: any) {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig('PanelContent', { variant })
  // Pass the computed styles into the `__css` prop
  return (
    <Box __css={styles} {...rest} w='100%' h='100%' flex={1}>
      {children}
    </Box>
  )
}

export default PanelContent
