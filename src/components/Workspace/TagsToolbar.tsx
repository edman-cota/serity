import { AiOutlinePlus } from 'react-icons/ai'
import { Button, Flex, Text } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'

import { RootState } from 'src/store'
import { setIsListOpen } from '@features/counter/onToggleListsSlice'
import { setIsTagOpen } from '@features/counter/onToggleTagsSlice'

const TagsToolbar = () => {
  const dispatch = useDispatch()
  const isTagOpen = useSelector((state: RootState) => state.isTagOpen.value)

  return (
    <Flex
      justifyContent='space-between'
      w='90%'
      pl='12px'
      py='4px'
      role='group'
      borderRadius='md'
      _hover={{ bg: 'whiteAlpha.200' }}
    >
      <Flex alignItems='center'>
        <Text color='rgba(255, 255, 255, 0.6)' fontSize='15px' fontWeight='medium'>
          Tags
        </Text>
      </Flex>
      <Flex alignItems='center' visibility='hidden' _groupHover={{ visibility: 'visible' }}>
        <Button h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsTagOpen(!isTagOpen))}>
          {isTagOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default TagsToolbar
