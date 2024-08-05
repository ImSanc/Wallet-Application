import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/Signup'
import { SignIn } from './pages/Signin'
import { Dashboard } from './pages/Dashboard'
import { Payment } from './pages/Payment'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path='/signin' element = { <SignIn/>} />
          <Route path='/dashboard' element = { <Dashboard/>}/>
          <Route path='/sendmoney' element = {<Payment/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
