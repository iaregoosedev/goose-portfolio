import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from '../Pages/HomePage/homepage';
import LLPage from '../Pages/LLPage/llPage';
import OSFPage from '../Pages/OSFPage/osfPage';
import {AnimatePresence} from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/LuminosLabs' element={<LLPage/>}/>
            <Route path='/OSF' element={<OSFPage/>}/>
            <Route path='/CAT' element={<OSFPage/>}/>
            <Route path='/7Summits' element={<OSFPage/>}/>
        </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes