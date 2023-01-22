import { Flex } from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import React from 'react'
import { MdDragIndicator } from 'react-icons/md'

const DragIndicator = () => {
  return (
    <Tooltip label='Drag to move'>
      <Flex
        visibility='hidden'
        h='100%'
        display='flex'
        alignItems='center'
        cursor='drag'
        color='rgb(147, 153, 159) '
        _groupHover={{ visibility: 'visible' }}
        _hover={{ color: 'white !important' }}
      >
        <MdDragIndicator />
      </Flex>
    </Tooltip>
  )
}

export default DragIndicator
