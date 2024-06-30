import React from 'react'
import { Homepage } from '../home/Homepage'
import { Navbar } from '../navbar/Navbar'
import { Route, Routes } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path='/' element= {<Homepage/>} />

        </Routes>
    </>
  )
}
