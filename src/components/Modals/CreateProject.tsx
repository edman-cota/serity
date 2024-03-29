import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button,
  Input,
  ModalFooter,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Tooltip } from '@serity-ui/react'
import { FormattedMessage } from 'react-intl'
import { AiOutlinePlus } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../../firebase'
import { RootState } from 'src/store'
import EmojiPicker from '../Menus/EmojiPicker'
import { Status } from '../../models/definitions'
import { createNewProject } from '@helpers/createNewProject'
import CharacterLimit from '@components/CharacterLimit/CharacterLimit'
import { useNavigate } from 'react-router-dom'
import { formatUrl, formatUsername } from '@helpers/formatter'
import { useGetProjects } from '@hooks/useGetProjects'

const CreateProject = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [projectName, setProjectName] = useState('')
  const [characterCount, setCharacterCount] = useState(0)
  const [touched, setTouched] = useState(false)
  const [hadInteraction, setHadInteraction] = useState(false)
  const emoji = useSelector((state: RootState) => state.emoji.value)
  const [alreadyExist, setAlreadyExist] = useState(false)
  const { projects } = useGetProjects()
  const existingProjects: string[] = []

  projects.map((project) => {
    existingProjects.push(project.name)
  })

  const maxLength = 40
  const username = formatUsername(user?.email)

  useEffect(() => {
    return () => {
      setProjectName('')
      setCharacterCount(0)
      setTouched(false)
      setHadInteraction(false)
      setAlreadyExist(false)
    }
  }, [isOpen])

  const handleOnChange = (event: any) => {
    setCharacterCount(event.target.value.length)
    setProjectName(event.target.value)
    setHadInteraction(true)
    if (existingProjects.includes(event.target.value)) {
      setAlreadyExist(true)
    } else {
      setAlreadyExist(false)
    }
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (projectName.trim() !== '' && !alreadyExist) {
      const status = createNewProject(projectName, user, emoji)
      if (status === Status.SUCCESS) {
        window.localStorage.setItem('project', projectName)
        navigate(`/${username}/${formatUrl(projectName)}`)
        onClose()
      }
    }
    onClose()
  }

  return (
    <>
      <Tooltip label={<FormattedMessage id='create_project' />}>
        <Button onClick={onOpen} h='2rem' w='2rem' p='0px'>
          <AiOutlinePlus />
        </Button>
      </Tooltip>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
        <ModalOverlay />
        <ModalContent maxW='450px' minH='360px'>
          <ModalHeader fontSize='17px'>
            <FormattedMessage id='create_project' />
          </ModalHeader>

          <ModalBody>
            <form style={{ width: '100%' }} onSubmit={handleOnSubmit}>
              {alreadyExist && (
                <Flex justifyContent='flex-end' h='30px'>
                  <Text color='red.500' fontSize='sm' py='6px'>
                    {projectName} already exist
                  </Text>
                </Flex>
              )}
              {!alreadyExist && (
                <CharacterLimit
                  characterCount={characterCount}
                  maxLength={maxLength}
                  warningPoint={30}
                  touched={touched}
                  hadInteraction={hadInteraction}
                />
              )}
              <Input
                name='name'
                autoFocus
                maxLength={maxLength}
                autoComplete='off'
                spellCheck='false'
                placeholder='Give your new project a name'
                value={projectName}
                onChange={handleOnChange}
                onBlur={() => setTouched(true)}
              />
            </form>
            <EmojiPicker />
          </ModalBody>

          <ModalFooter justifyContent='space-between'>
            <Button w='100px' onClick={() => onClose()}>
              <FormattedMessage id='cancel' />
            </Button>
            <Button type='submit' variant='submit' onClick={handleOnSubmit}>
              <FormattedMessage id='create' />
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreateProject
