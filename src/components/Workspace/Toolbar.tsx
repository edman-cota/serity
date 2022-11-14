import { AiOutlinePlus } from 'react-icons/ai'
import { HiOutlineChevronDown, HiOutlineChevronLeft } from 'react-icons/hi'
import { Button, Flex, Text } from '@chakra-ui/react'
import { setIsListOpen } from '@features/counter/onToggleListsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store'

const Toolbar = () => {
  const dispatch = useDispatch()
  const isListOpen = useSelector((state: RootState) => state.isListOpen.value)

  return (
    <Flex
      justifyContent='space-between'
      w='90%'
      pl='14px'
      py='4px'
      role='group'
      borderRadius='md'
      _hover={{ bg: 'whiteAlpha.200' }}
    >
      <Flex alignItems='center'>
        <Text>Projects</Text>
      </Flex>
      <Flex alignItems='center' visibility='hidden' _groupHover={{ visibility: 'visible' }}>
        <Button h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
        <Button h='2rem' w='2rem' p='0px' onClick={() => dispatch(setIsListOpen(!isListOpen))}>
          {isListOpen ? <HiOutlineChevronDown /> : <HiOutlineChevronLeft />}
        </Button>
      </Flex>
    </Flex>
  )
}

export default Toolbar
