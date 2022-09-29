import React from 'react'
import { Route, Routes, useLocation} from "react-router-dom"
import Intro from "./Intro/Intro";
import MainPage from "../pages/MainPage";

import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Intro/>} />
          <Route path="/main" element={<MainPage/>} />
        </Routes>
      </AnimatePresence>
  )
}

export default AnimatedRoutes