import React, { useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { VStack, Button, Flex, Checkbox } from '@chakra-ui/react'

import Arrow from './Arrow'
import Footer from './Footer'
import { auth } from '../../firebase'
import SocialLogin from './SocialLogin'
import LoginHeader from './LoginHeader'
import styles from '../../styles/login.module.scss'
import { formatUsername, formatUrl } from '../../helpers/formatter'
import { loginSchema } from '../../validation/validators/loginSchema'

const LoginForm = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  const project = window.localStorage.getItem('project') ?? 'today'

  const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (error: any) {
      console.log(error.code)
    }
  }

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) {
      const username = formatUsername(user?.email)
      navigate(`/${username}/${formatUrl(project)}`)
    }
  }, [user, loading, navigate])

  return (
    <VStack h='100%' justifyContent='center' width={{ base: '100%', xl: '100%' }}>
      <LoginHeader />
      <SocialLogin />

      <VStack className={styles.form}>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={loginSchema}
          onSubmit={(values) => {
            signInWithEmailAndPassword(values.email, values.password)
          }}
        >
          <Form>
            <Field name='email' type='email' placeholder='Email address' />
            <ErrorMessage name='email' component='div' className={styles.fieldError} />

            <Field name='password' type='password' placeholder='Password' />
            <ErrorMessage name='password' component='div' className={styles.fieldError} />

            <Flex justifyContent='space-between' my='15px'>
              <Checkbox defaultChecked spacing='.75rem' color='blackAlpha.800'>
                <FormattedMessage id='remember_me' />
              </Checkbox>
              <Button variant='link'>
                <FormattedMessage id='forgot_password' />
              </Button>
            </Flex>

            <button className='cssbuttons-io-button' type='submit'>
              <FormattedMessage id='login' />
              <div className='icon'>
                <Arrow />
              </div>
            </button>
          </Form>
        </Formik>
      </VStack>

      <Footer textId='dont_have_an_account_yet' whereTo='register' />
    </VStack>
  )
}

export default LoginForm
