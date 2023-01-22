import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { VStack, Text, Flex, Link, Checkbox } from '@chakra-ui/react'

import './index.scss'
import Footer from '../Login/Footer'
import Header from '../Login/LoginHeader'
import Arrow from '@components/Login/Arrow'
import SocialLogin from '../Login/SocialLogin'
import styles from '../../styles/login.module.scss'
import { registerWithEmailAndPassword } from '../../firebase'
import { registerSchema } from '../../validation/validators/registerSchema'

const RegisterForm = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <VStack h='100%' justifyContent='center' width='100%'>
      <Header />
      <SocialLogin />

      <VStack className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
            username: '',
            agreement: false,
          }}
          validationSchema={registerSchema}
          onSubmit={(values) => {
            setIsLoading(true)
            registerWithEmailAndPassword(values.username, values.email, values.password)
            setIsLoading(false)
            navigate('/onboarding')
          }}
        >
          <Form>
            <Field name='username' placeholder='Username' />
            <ErrorMessage name='username' component='div' className={styles.fieldError} />

            <Field name='email' type='email' placeholder='Email address' />
            <ErrorMessage name='email' component='div' className={styles.fieldError} />

            <Field name='password' type='password' placeholder='Password' />
            <ErrorMessage name='password' component='div' className={styles.fieldError} />

            <Flex my='20px'>
              <Checkbox spacing='.75rem'>
                <Text fontSize='14px' color='blackAlpha.800'>
                  I agree to the{' '}
                  <Link href='/terms' color='#09f'>
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href='/privacy' color='#09f'>
                    Privacy Statement
                  </Link>{' '}
                </Text>
              </Checkbox>
            </Flex>

            <button
              className='cssbuttons-io-button'
              type='submit'
              style={{ pointerEvents: isLoading ? 'none' : 'auto' }}
            >
              {isLoading ? (
                <Flex mx='auto' alignItems='center'>
                  <ClipLoader color='#36d7b7' size={25} loading={isLoading} />
                </Flex>
              ) : (
                <>
                  <FormattedMessage id='get_started' />
                  <div className='icon'>
                    <Arrow />
                  </div>
                </>
              )}
            </button>
          </Form>
        </Formik>
      </VStack>

      <Footer textId='already_have_an_account' whereTo='login' />
    </VStack>
  )
}

export default RegisterForm
