import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

import {motion} from "framer-motion"

const MainPage = () => {
  return (
    <motion.div initial={{opacity:0, transition: {duration: 1.0}}} animate={{opacity:1, transition: {duration: 1.0}}} exit={{opacity:0, transition: {duration: 1.0}}}>
      <Header/>
      <Main/>
    </motion.div>
  )
}

export default MainPage