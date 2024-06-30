import React from 'react'
import { Homepage } from '../home/Homepage'
import { Route, Routes } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/' element= {<Homepage/>} />

        </Routes>
    </>
  )
}
