import React from 'react'
import { useWindowSize } from 'react-use'
import { FormattedMessage } from 'react-intl'
import { Button, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'

import { RootState } from 'src/store'
import CreateTagModalTrigger from '@components/Modals/CreateTagModal'
import { setIsTagOpen } from '@features/counter/onToggleTagsSlice'

const TagsToolbar = () => {
  const dispatch = useDispatch()
  const { width } = useWindowSize()
  const isTagOpen = useSelector((state: RootState) => state.isTagOpen.value)
  const itemColor = useColorModeValue('rgba(0,0,0,0.56)', 'rgba(255, 255, 255, 0.6)')
  const hoverBg = useColorModeValue('white', 'whiteAlpha.200')

  return (
    <Flex
      justifyContent='space-between'
      w='90%'
      pl='12px'
      py='4px'
      role='group'
      borderRadius='md'
      _hover={{ bg: hoverBg }}
    >
      <Flex alignItems='center'>
        <Text color={itemColor} fontSize='14px' fontWeight='medium'>
          <FormattedMessage id='tags' />
        </Text>
      </Flex>
      <Flex
        alignItems='center'
        visibility={width < 768 ? 'visible' : 'hidden'}
        _groupHover={{ visibility: 'visible' }}
      >
        <CreateTagModalTrigger />
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsTagOpen(!isTagOpen))}>
          {isTagOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default TagsToolbar
