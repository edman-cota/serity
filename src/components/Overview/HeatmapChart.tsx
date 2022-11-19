import { Flex, useColorModeValue } from '@chakra-ui/react'
import { useGetAllCompletedTasks } from '@hooks/useGetAllCompletedTasks'
import React from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'
import ReactTooltip from 'react-tooltip'
import { heatmapdata } from './data'
import './heatmap.css'

const today = new Date()

const heatmap = heatmapdata.reverse()

const HeatmapChart = () => {
  const data = getRange(365).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: heatmap[index],
    }
  })

  const cardBackground = useColorModeValue('white', '#1F2733')

  return (
    <Flex
      w={{ base: '95%', sm: '85%', xl: '823px' }}
      my='auto'
      h='284px'
      // px='60px'
      py='40px'
      mx='auto'
      bg={cardBackground}
    >
      <CalendarHeatmap
        startDate={shiftDate(today, -365)}
        endDate={today}
        values={data}
        gutterSize={3}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty'
          }
          return `${value.count}` < 5 ? `color-github-${value.count}` : `color-github-5`
        }}
        tooltipDataAttrs={(value) => {
          return {
            'data-tip': `${value.count} tasks done on ${value.date.toString().slice(4, 15)}`,
          }
        }}
      />
      <ReactTooltip />
    </Flex>
  )
}

function shiftDate(date: any, numDays: any) {
  const newDate = new Date(date)
  newDate.setDate(newDate.getDate() + numDays)
  return newDate
}

function getRange(count: number) {
  return Array.from({ length: count }, (_, i) => i)
}

export default HeatmapChart
