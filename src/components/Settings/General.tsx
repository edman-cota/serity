import React from 'react'
import { Flex, Text, VStack, useColorMode } from '@chakra-ui/react'

import Select, { SelectItem } from '@components/Select/Select'
import { LOCALES } from '../../i18n/locales'
import { FormattedMessage } from 'react-intl'

interface Props {
  currentLocale: string
  handleChange: (e: any) => void
}

const General = ({ currentLocale, handleChange }: Props) => {
  const { colorMode } = useColorMode()
  const languages = [
    { name: 'English', code: LOCALES.ENGLISH },
    { name: 'Spanish', code: LOCALES.SPANISH },
  ]

  return (
    <VStack h='100%' w='100%' py='60px'>
      <Flex direction='column' w={{ base: '90%', md: '80%' }} mx='auto' maxWidth={880}>
        <Flex>
          <Text fontSize='20px' fontWeight='semibold'>
            General
          </Text>
        </Flex>
        <Flex mt='30px' direction='column'>
          <Text py='10px'>
            <FormattedMessage id='language' />
          </Text>
          <Select theme={colorMode} width={300} onValueChange={handleChange}>
            <Select.Trigger value={currentLocale} placeholder='Select a language' />
            <Select.Content>
              {languages.map(({ name, code }) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </Select.Content>
          </Select>
        </Flex>
      </Flex>
    </VStack>
  )
}

export default General

// Global CSS cannot be imported from within node_modules
