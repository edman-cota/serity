import { useEffect } from 'react'
import { Flex, Text, Input, VStack, FormControl, FormLabel, Textarea } from '@chakra-ui/react'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'

import { UserAvatar } from './UserAvatar'
import { auth, storage } from '../../firebase'
import DeleteAccountModal from '@components/Modals/DeleteAccountModal'

const Account = () => {
  const [user, loading] = useAuthState(auth)

  const onChangeImage = (e: any) => {
    if (e.target.files[0] == null) return

    storage
      .ref(`/users/${user?.uid}/profile/${e.target.files[0].name}`)
      .put(e.target.files[0])
      .on('state_changed', () => {
        storage
          .ref(`users/${user?.uid}/profile`)
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then((url) => {
            user?.updateProfile({ photoURL: url }).then(() => {})
          })
      })
  }

  useEffect(() => {
    // eslint-disable-next-line no-useless-return
    if (loading) return
  }, [loading])

  return (
    <VStack w='100%' flex={1} py='60px'>
      <Flex direction='column' w={{ base: '90%', md: '80%' }} mx='auto' maxWidth={880}>
        <Flex direction='column' w='100%'>
          <Text py='10px'>Photo</Text>

          <Flex>
            {user && <UserAvatar user={{ name: user.displayName, image: user.photoURL }} />}
          </Flex>
        </Flex>
        <Flex mt='30px' w='100%'>
          <Flex direction='column' ml='5px' justifyContent='center'>
            <input type='file' id='imageInput' hidden onChange={onChangeImage} />
          </Flex>
        </Flex>
        <Flex direction='column' w='100%'>
          <Flex direction='column'>
            <Text py='10px'>
              <FormattedMessage id='name' />
            </Text>
            <FormattedMessage id='name' defaultMessage='Name'>
              {(placeholder) => <Input placeholder={placeholder} value={user?.displayName} />}
            </FormattedMessage>
          </Flex>
          <Flex direction='column' mt='30px'>
            <Text py='10px'>
              <FormattedMessage id='email' />
            </Text>
            <FormattedMessage id='email' defaultMessage='Email'>
              {(placeholder) => <Input placeholder={placeholder} value={user?.email} isReadOnly />}
            </FormattedMessage>
          </Flex>
          <Flex direction='column' mt='30px'>
            <FormControl>
              <FormLabel>Bio</FormLabel>
              <Textarea />
            </FormControl>
          </Flex>
        </Flex>
        <Flex my='40px' h='1px' bg='whiteAlpha.200' w='100' />
        <Flex direction='column' w='100%'>
          <Text lineHeight='2rem' fontWeight={500}>
            <FormattedMessage id='delete_account' />
          </Text>
          <Text fontSize='15px' mb='10px'>
            This will immediately delete all of your data including tasks, projects, and more. This
            can't be undone.{' '}
          </Text>
          <DeleteAccountModal />
        </Flex>
      </Flex>
    </VStack>
  )
}

export default Account
