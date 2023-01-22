/* eslint-disable object-curly-newline */
import { useDispatch } from 'react-redux'
import { FormattedMessage } from 'react-intl'
import { FiCheck } from 'react-icons/fi'
import { BsSortDownAlt, BsSortUp, BsFlag, BsCalendar2 } from 'react-icons/bs'
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
    { icon: <BsSortDownAlt size='1.3em' />, label: 'a_to_z' },
    { icon: <BsSortUp size='1.3em' />, label: 'z_to_a' },
    { icon: <BsFlag />, label: 'priority' },
    { icon: <BsCalendar2 />, label: 'due_date' },
  ]

  const updateSortedBy = (order: string) => {
    dispatch(setOrderBy(order))
    // setSortedBy(order)
  }

  return (
    <Menu autoSelect={false} placement='bottom'>
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
            <MenuItem key={label} onClick={() => updateSortedBy(label)}>
              <Text display='flex' justifyContent='space-between' alignItems='center' w='100%'>
                <Text as='span' fontSize='14px' display='flex' alignItems='center'>
                  <Text as='span' w='34px'>
                    {icon}
                  </Text>
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
