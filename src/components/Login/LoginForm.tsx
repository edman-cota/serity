import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { VStack, Text, Input, Button, Flex, Checkbox } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { FormattedMessage } from 'react-intl'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase'
import SocialLogin from './SocialLogin'
import Footer from './Footer'
import LoginHeader from './LoginHeader'
import { formatUrl } from '../../helpers/formatter'
import { formatUsername } from '../../helpers/formatter'

const LoginForm = () => {
  const navigate = useNavigate()
  const [user, loading] = useAuthState(auth)
  const project = window.localStorage.getItem('project') ?? 'today'

  const signInWithEmailAndPassword = async (email: string, password: string) => {
    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {}
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  useEffect(() => {
    if (loading) {
      return
    }
    if (user) {
      const username = formatUsername(user?.email)
      navigate(`/${username}/${formatUrl(project)}`)
    }
  }, [user, loading, navigate])

  const onSubmit = (data: any) => {
    signInWithEmailAndPassword(data.email, data.password)
  }

  return (
    <VStack h="100%" justifyContent="center" width={{ base: '100%', xl: '100%' }}>
      <LoginHeader />
      <SocialLogin />

      <VStack>
        <form style={{ width: '440px', padding: '25px' }} onSubmit={handleSubmit(onSubmit)}>
          <Input
            variant="filled"
            placeholder="Correo"
            _placeholder={{ color: '#999' }}
            {...register('email', { required: true })}
          />
          {errors.email?.type === 'required' && (
            <Text color="red.400" _before={{ content: `"⚠ "` }}>
              <FormattedMessage id="email_is_required" />
            </Text>
          )}

          <Input
            variant="filled"
            placeholder="Contraseña"
            _placeholder={{ color: '#999' }}
            type="password"
            {...register('password', { required: true, minLength: 6 })}
          />
          {errors.password?.type === 'required' && (
            <Text color="red.400" _before={{ content: `"⚠ "` }}>
              <FormattedMessage id="password_is_required" />
            </Text>
          )}

          <Flex justifyContent="space-between" my="15px">
            <Checkbox defaultChecked spacing=".75rem" color="blackAlpha.800">
              Remember me
            </Checkbox>
            <Button variant="link" my="20px" color="#0071dc">
              <FormattedMessage id="forgot_password" />
            </Button>
          </Flex>

          <button className="cssbuttons-io-button" type="submit">
            Log in
            <div className="icon">
              <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </button>
        </form>
      </VStack>

      <Footer textId="dont_have_an_account_yet" whereTo="register" />
    </VStack>
  )
}

export default LoginForm
