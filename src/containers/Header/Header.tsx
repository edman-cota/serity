import { Flex } from '@chakra-ui/react'

const Header = (): JSX.Element => {
  return (
    <Flex h='calc(100vh - 64px)' py='2rem'>
      <Flex maxWidth='80rem' mx='auto'>
        <Flex mt='5rem' h='100%' textAlign='center' flexDir='column'>
          <h1 style={{ fontSize: '3.75rem', fontWeight: 700, lineHeight: 1.1 }}>
            <span>Simple and clean</span>
            <br />
            to-do list
          </h1>
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 500,
              display: 'flex',
              flexDirection: 'column',
              lineHeight: '2.4rem',
              marginTop: '2rem',
            }}
          >
            <span>Complete blogging platform with Notion as your CMS.</span>
            <span>Write your articles on Notion and publish them with a single click.</span>
            <span>No coding or design skills required.</span>
          </h2>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
