/* eslint-disable object-curly-newline */
import { useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { HiViewBoards } from 'react-icons/hi'
import { FiCheck, FiList } from 'react-icons/fi'
import { BsFillCalendarMinusFill } from 'react-icons/bs'
import { VscFilter, VscFilterFilled } from 'react-icons/vsc'
import { Menu, MenuButton, MenuList, MenuItem, Text, Button } from '@chakra-ui/react'

import { useLocalStorage } from '@hooks/useLocalStorage'
import { setOrderBy } from '@features/counter/orderBySlice'

const SortItem = () => {
  const dispatch = useDispatch()
  const [sortedBy, setSortedBy] = useLocalStorage('order-by', 'custom')

  const filters = ['custom', 'priority', 'content']
  const icons = { 0: FiList, 1: HiViewBoards, 2: BsFillCalendarMinusFill }

  const updateSortedBy = (order: string) => {
    dispatch(setOrderBy(order))
    setSortedBy(order)
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button} variant='ghost'>
        {sortedBy === 'custom' ? <VscFilter /> : <VscFilterFilled color='#00B8D9' />}
      </MenuButton>
      <MenuList>
        {filters.map((filter, index) => {
          const Icon = icons[index]
          return (
            <MenuItem key={filter} icon={<Icon />} onClick={() => updateSortedBy(filter)}>
              <Text display='flex' justifyContent='space-between' alignItems='center'>
                <Text as='span' pl='6px' fontSize='14px'>
                  <FormattedMessage id={filter} />
                </Text>
                {sortedBy === filter ? (
                  <Text as='span'>
                    <FiCheck />
                  </Text>
                ) : null}
              </Text>
            </MenuItem>
          )
        })}
      </MenuList>
    </Menu>
  )
}

export default SortItem
