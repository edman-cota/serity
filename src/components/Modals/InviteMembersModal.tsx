/* eslint-disable comma-dangle */
/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Flex,
  Input,
  ModalFooter,
  HStack,
  IconButton,
  useToast,
  MenuItem,
  DarkMode,
} from '@chakra-ui/react'
import { Tooltip } from '@serity-ui/react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'
import { FiLink, FiUser } from 'react-icons/fi'
import { IoClose } from 'react-icons/io5'
import { auth } from '../../firebase'

interface Props {
  projectName: string
}

const InviteMembersModal = ({ projectName }: Props) => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState('https://replit.com/join/ptgjboqhtb-edmancota')
  const [linked, setLinked] = useState(false)

  return (
    <>
      <MenuItem icon={<FiUser />} onClick={onOpen}>
        <FormattedMessage id='members' />
      </MenuItem>

      <DarkMode>
        <Modal onClose={onClose} isOpen={isOpen} motionPreset='slideInBottom' size='xl'>
          <ModalOverlay bg='#0e1525A0' />
          <ModalContent
            maxW='580px'
            // h="50%"
            minH='490px'
            bg='#1c2333'
            p='32px'
            boxShadow='inset 0 1px 0 0 rgb(255 255 255 / 5%)'
          >
            <ModalHeader mt='4px' mb='10px' p='0px' fontWeight={500} fontSize='17px' color='white'>
              <FormattedMessage id='invite' />
            </ModalHeader>

            <ModalBody p='0px'>
              <Flex w='100%' direction='column'>
                <form style={{ display: 'flex', gap: '10px', width: '100%' }}>
                  <Input
                    autoComplete='off'
                    borderRadius='base'
                    name='email'
                    color='#f5f9fc'
                    h='35px'
                    fontSize='15px'
                    fontWeight={400}
                    placeholder='Search by username or invite by email'
                    _focus={{
                      borderColor: '#0079f2',
                    }}
                  />
                  <Input name='project' value={projectName} display='none' />
                  <Input
                    name='from_name'
                    // value={user?.displayName}
                    display='none'
                  />
                  <Button type='submit' h='2rem'>
                    <FormattedMessage id='invite' />
                  </Button>
                </form>
              </Flex>
            </ModalBody>
            <ModalFooter p='0' flexDir='column'>
              {linked ? (
                <HStack w='100%'>
                  <Input
                    // value={value}
                    // readOnly
                    fontWeight={400}
                    borderRadius='base'
                    h='35px'
                    fontSize='15px'
                    onFocus={(e) => e.target.select()}
                    _focus={{
                      borderColor: '#0079f2',
                    }}
                  />
                  <CopyToClipboard
                    text={value}
                    onCopy={() => {
                      toast({
                        title: 'Link copied',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                      })
                    }}
                  >
                    <IconButton
                      aria-label='Copy to clipboard'
                      _hover={{ bg: '#57abff' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      <Tooltip label='Copy'>
                        <span
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                        >
                          <FiLink />
                        </span>
                      </Tooltip>
                    </IconButton>
                  </CopyToClipboard>
                  <Tooltip label='Delete link'>
                    <IconButton
                      aria-label='CopyToClipboard'
                      onClick={() => setLinked(!linked)}
                      _hover={{ bg: '#ff6666' }}
                      _focus={{ boxShadow: 'none' }}
                    >
                      <IoClose />
                    </IconButton>
                  </Tooltip>
                </HStack>
              ) : (
                <Button
                  bg='rgba(255, 255, 255, 0.08)'
                  w='100%'
                  mt='20px'
                  onClick={() => setLinked(!linked)}
                >
                  <FormattedMessage id='generate_a_join_link' />
                </Button>
              )}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  )
}

export default InviteMembersModal
