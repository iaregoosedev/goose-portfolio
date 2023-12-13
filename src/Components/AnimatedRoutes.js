import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from '../Pages/HomePage/homepage';
import OSFPage from '../Pages/OSFPage/osfPage';
import {AnimatePresence} from "framer-motion";
import SSPage from '../Pages/SSPage/ssPage';
import CATPage from '../Pages/CATPage/catPage';
import LLPage from '../Pages/LLPage/llPage';
import OPage from '../Pages/OPage/oPage';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/OLIMP' element={<OPage/>}/>
            <Route path='/LuminosLabs' element={<LLPage/>}/>
            <Route path='/OSF' element={<OSFPage/>}/>
            <Route path='/CAT' element={<CATPage/>}/>
            <Route path='/7Summits' element={<SSPage/>}/>
        </Routes>
    </AnimatePresence> 
  )
}

export default AnimatedRoutes