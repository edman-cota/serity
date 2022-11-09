import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Feature from './Feature'
import { BsFillCalendar2RangeFill, BsFillMoonFill, BsClockHistory } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { BiDevices } from 'react-icons/bi'
import { AiOutlineFilter, AiOutlineLineChart } from 'react-icons/ai'

const Features = () => {
  return (
    <Flex direction='column' bg='white'>
      <Flex w='100%' justifyContent='center' pt='40px'>
        <Heading color='black'>Some of the features </Heading>
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        w={{ base: '100%', lg: '90%' }}
        mx='auto'
        gap={6}
        px='20px'
        py='100px'
      >
        <Feature
          icon={<BsFillCalendar2RangeFill />}
          title='Smart Calendar'
          description='Access more calendar views. Set boht start and end dates to tasks. You can even subscribe to third-party calendars'
        />
        <Feature
          icon={<AiOutlineFilter />}
          title='Customize filters'
          description='Unlock the "Filter" feature, and be as flexible as you need with all the Lists.'
        />
        <Feature
          icon={<BsClockHistory />}
          title='Task Activity'
          description='View previous changes for all tasks and lists. Keep track of your shared projects.'
        />
        <Feature
          icon={<BsFillCalendar2RangeFill />}
          title='Smart Calendar'
          description='Access more calendar views. Set boht start and end dates to tasks. You can even subscribe to third-party calendars'
        />
        <Feature
          icon={<BiDevices />}
          title='Fully Responsive'
          description='Your tasks will look good irrespective of the device that your are using.'
        />
        <Feature
          icon={<CiSearch />}
          title='Search'
          description='Quickly search and find any task you want with just a keyboard.'
        />
        <Feature
          icon={<AiOutlineLineChart />}
          title='Track Progress'
          description={`Check the progress of each projects, or see what you've achieved with the "Historical Statistics" feature.`}
        />
        <Feature
          icon={<BsFillMoonFill />}
          title='Dark Mode'
          description='Choose dark mode or light mode or let your system to choose.'
        />
      </Grid>
    </Flex>
  )
}

export default Features
