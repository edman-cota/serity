import React from 'react'
import { Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { BarChart, Gridline, GridlineSeries, BarSeries } from 'reaviz'

const CompletionRate = (): JSX.Element => {
  const cardBackground = useColorModeValue('white', '#1F2733')

  return (
    <Flex
      w={{ base: '95%', sm: '85%', xl: '490px' }}
      mx={{ base: 'auto', xl: '15px' }}
      mt={{ base: '16px', xl: '20px' }}
      px={{ base: '15px', md: '25px', xl: '20px' }}
      h='284px'
      borderRadius='8px'
      bg={cardBackground}
    >
      {/* <Flex className="stat-dates">
        <ul>
          <li>Day</li>
          <li>Week</li>
          <li>Month</li>
        </ul>
      </Flex>
      <Flex py={5} w="100%">
        <Text>Recent Completion Rate Curve</Text>
      </Flex>
      <BarChart
        height={160}
        margins={0}
        data={[
          { key: "22", data: 0 },
          { key: "23", data: 0 },
          { key: "24", data: 0 },
          { key: "25", data: 0 },
          { key: "26", data: 30 },
          { key: "27", data: 100 },
          { key: "28", data: 80 },
        ]}
        series={<BarSeries width={10} />}
        gridlines={<GridlineSeries line={<Gridline direction="y" />} />}
      /> */}
    </Flex>
  )
}

export default CompletionRate
