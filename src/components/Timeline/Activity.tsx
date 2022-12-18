import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import Last from './Last'
import Icon from './Icon'
import Time from './Time'
import './Activities.scss'
import Verbose from './Verbose'
import ActivityContent from './ActivityContent'
import { TimelineActivity } from '../../models/Activity.model'

const Activity = ({
  username,
  content,
  description,
  type,
  priority,
  createdAt,
  due,
}: TimelineActivity): JSX.Element => {
  return (
    <motion.li className='timeline-item'>
      <Flex>
        <Icon type={type} />

        <Flex className='content' direction='column' w='100%' mb='20px' mx='30px'>
          <Flex pt='3px' w='100%' fontSize='15px' justifyContent='space-between'>
            <Text as='span' color='rgba(255, 255, 255, 0.92)' pr='30px' fontWeight={600}>
              {username}
            </Text>
            <Time createdAt={createdAt} />
          </Flex>
          <Text fontSize='15px' className='text' pt='7px'>
            <Verbose type={type} />
            <ActivityContent type={type} content={content} description={description} />
            <Last type={type} priority={priority} due={due} />
          </Text>
        </Flex>
      </Flex>
    </motion.li>
  )
}

export default Activity
