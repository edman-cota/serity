import './style.scss'
import { useNavigate } from 'react-router-dom'
import { Flex, HStack, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import { Formik, Field, Form } from 'formik'
import styles from '../../styles/login.module.scss'
import { createNewWorkspace } from '@helpers/createNewWorkspace'

const Onboarding = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  return (
    <HStack style={{ height: '100vh', width: '100%' }}>
      <VStack w='50%'>
        <Flex>Serity</Flex>
        <Flex>
          <Heading>Create a workspace</Heading>
        </Flex>
        <VStack className={styles.form}>
          <Formik
            initialValues={{
              workspace: '',
            }}
            onSubmit={(values) => {
              createNewWorkspace(user, values.workspace)
              navigate(`/spaces/${values.workspace}`)
            }}
          >
            <Form>
              <Field name='workspace' type='text' placeholder='e.g. Acme Corp' />
              {/* <ErrorMessage name='email' component='div' className={styles.fieldError} /> */}

              <button className='cssbuttons-io-button' type='submit'>
                Continue
              </button>
            </Form>
          </Formik>
        </VStack>
        <Flex></Flex>
      </VStack>
      <VStack bg='#EF5777' h='100%' w='50%'></VStack>
    </HStack>
  )
}

export default Onboarding
