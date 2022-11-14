import PropTypes from 'prop-types'
import { Flex, Text } from '@chakra-ui/react'
import { BsCheck2 } from 'react-icons/bs'

interface Props {
  data: any
}

const Update = ({ data }: Props) => (
  <div className='timeline-item'>
    <Flex alignItems='center' w='100%'>
      <Text className='time' bg='#36B37E'>
        <BsCheck2 />
      </Text>

      <div className='content'>
        <div className='date-container'>
          <p className='date'>
            🔥
            {data.date}
          </p>
          {data.isLatest ? <p className='latest'>LATEST</p> : null}
        </div>
        {data.lessons.map((lesson: any) => (
          <p key={lesson.id} className='text'>
            -{lesson}
          </p>
        ))}
      </div>
    </Flex>
  </div>
)

export default Update
