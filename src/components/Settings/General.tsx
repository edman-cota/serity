import React from 'react'
import { Flex, Select, Text, VStack } from '@chakra-ui/react'

import { LOCALES } from '../../i18n/locales'
import { FormattedMessage } from 'react-intl'

interface Props {
  currentLocale: string
  handleChange: (e: any) => void
}

const General = ({ currentLocale, handleChange }: Props) => {
  const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Spanish', code: LOCALES.SPANISH },
  ]
  return (
    <VStack h='100%' w='100%' pt='100px' px='30px'>
      <Flex direction='column' w='100%'>
        <Flex>
          <Text fontSize='20px' fontWeight='semibold'>
            General
          </Text>
        </Flex>
        <Flex mt='30px' direction='column'>
          <Text py='10px'>
            <FormattedMessage id='language' />
          </Text>
          <Select variant='filled' size='md' onChange={handleChange} value={currentLocale}>
            {languages.map(({ name, code }) => (
              <option key={code} value={code} style={{ height: '50px' }}>
                {name}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default General
