import { Text } from '@chakra-ui/react'
import { formatAMPM } from '../../helpers/formatter'
import Moment from 'react-moment'

interface Props {
  createdAt: any
}

const Time = ({ createdAt }: Props) => {
  const date = new Date(createdAt)

  console.log('at: ', createdAt)
  console.log('data: ', date)

  return (
    <Text as='span' fontSize='14px' color='rgb(133, 134, 153)'>
      {/* <Moment fromNow>1976-04-19T12:59-0500</Moment> */}
      {new Date(date.getTime()).toLocaleDateString('en-US')} -{' '}
      {formatAMPM(new Date(date.getTime()))}
    </Text>
  )
}

export default Time
