import React from 'react'
import {
  Flex,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  LightMode,
} from '@chakra-ui/react'
import Navbar from '../../components/Home/Navbar/Navbar'
import Footer from '../../containers/Footer/Footer'
import './FAQ.scss'

const FAQ = (): JSX.Element => {
  return (
    <Flex direction='column' bg='white' w='100%'>
      <Navbar />
      <Flex className='faq-container'>
        <Flex my={15} mx='auto' textAlign='center'>
          <Text fontSize={25} fontWeight='600' color='#02172f' px='2rem'>
            Frequently Asked Questions
          </Text>
        </Flex>
        <Flex className='accordion-container'>
          <Accordion allowToggle w='100%'>
            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    What is Cota?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    Section 2 title
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    How secure is Cota?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                At Cota, we take security and privacy seriously.
                <br />
                <br />
                All traffic on Quire runs on SSL/TLS, the most powerful and trusted protocol for
                secure communications.
                <br />
                <br />
                Your data is stored in the United States by Amazon Web Services (AWS), and is backed
                up continuously with copies stored in an off-site location for disaster recovery.
                <br />
                <br />
                No one is allowed to access the data without written permision, and we only ask if
                it is really necessary for debugging.
                <br />
                <br />
                So you can be sure your data is personal, and stays personal to you.
                <br />
                <br />
                For more information, please visit Cota security page.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    Is Cota free?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                You can start using Cota for free without any strings attached. The Free plan does
                have some limitations, however you can upgrade your subscription plan anytime you
                want!.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem borderColor='gray'>
              <h2>
                <AccordionButton className='accordion-button'>
                  <Box flex='1' textAlign='left'>
                    How can I delete my Cota account?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel className='accordion-panel'>
                You can go to Account Settings and choose <b>Delete account.</b>
                <br />
                <br />
                Once you delete your account, you will no longer have access to any data in this
                account. All of the workspaces that you own will also get deleted as well. Deleting
                an account is permanent and cannot be undone.
                <br />
                <br />
                If you have subscribed to one of Edman's subscription plans before, please reach out
                to Paddle to delete your payment data
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
      <Footer />
    </Flex>
  )
}

export default FAQ
