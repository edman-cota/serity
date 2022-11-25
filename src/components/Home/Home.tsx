import { Flex } from '@chakra-ui/react'

import Navbar from './Navbar/Navbar'
import Header from '../../containers/Header/Header'
import Features from './Features/Features'
import React from 'react'
import '../../index.css'

export const Main = (): JSX.Element => {
  return (
    <>
      <section id='main'>
        <div className='main-box'>
          <Navbar />
        </div>
      </section>
      <div className='circle-1'></div>
      <div className='circle-2'></div>
    </>

    // <Flex direction='column' w='100%' overflow='hidden' bg='#5095E4'>
    //   <Flex direction='column'>
    //     {/* <Navbar /> */}
    //     <Header />
    //     <div className='bg-1'></div>
    //     <div className='bg-2'></div>
    //   </Flex>
    //   <Features />
    // </Flex>
  )
}

export default Main
