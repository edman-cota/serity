import { Flex } from '@chakra-ui/react'
import RenderDateText from '../RenderDate/RenderDateText'

const ItemMenu = ({ task }: { task: any }): JSX.Element => {
  return (
    <Flex visibility="hidden" flex={1} _groupHover={{ visibility: 'visible' }}>
      <Flex flex={1} justifyContent="center">
        {task?.due !== undefined ? <RenderDateText due={task.due} /> : null}
      </Flex>
    </Flex>
  )
}

export default ItemMenu
