/* eslint-disable object-curly-newline */
import { useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { HiViewBoards } from 'react-icons/hi'
import { FiCheck, FiList } from 'react-icons/fi'
import { BsFillCalendarMinusFill, BsSortDownAlt, BsSortUpAlt } from 'react-icons/bs'
import { VscFilter, VscFilterFilled } from 'react-icons/vsc'
import { Menu, MenuButton, MenuList, MenuItem, Text, Button } from '@chakra-ui/react'

// import { useLocalStorage } from '@hooks/useLocalStorage'
import { setOrderBy } from '@features/counter/orderBySlice'
import React, { useState } from 'react'

const SortSwitcher = () => {
  const dispatch = useDispatch()
  // const [sortedBy, setSortedBy] = useLocalStorage('order-by', 'custom')
  const [sortedBy, setSortedBy] = useState('custom')

  const filters = [
    { icon: <FiList />, label: 'custom' },
    { icon: <HiViewBoards />, label: 'priority' },
    { icon: <BsSortDownAlt />, label: 'a_to_z' },
    { icon: <BsSortUpAlt />, label: 'z_to_a' },
  ]

  const updateSortedBy = (order: string) => {
    dispatch(setOrderBy(order))
    // setSortedBy(order)
  }

  return (
    <Menu autoSelect={false}>
      <MenuButton as={Button}>
        {sortedBy === 'custom' ? (
          <VscFilter style={{ margin: 'auto' }} />
        ) : (
          <VscFilterFilled color='#00B8D9' style={{ margin: 'auto' }} />
        )}
      </MenuButton>
      <MenuList>
        {filters.map((filter) => {
          const { icon, label } = filter

          return (
            <MenuItem key={label} icon={icon} onClick={() => updateSortedBy(label)}>
              <Text display='flex' justifyContent='space-between' alignItems='center'>
                <Text as='span' pl='6px' fontSize='14px'>
                  <FormattedMessage id={label} />
                </Text>
                {sortedBy === label ? (
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

export default SortSwitcher
