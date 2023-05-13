import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AppRoutes } from './routes/appRoutes'
import { Navbar } from './components/Navbar/Navbar'
import { ThemeProvider, CssBaseline } from "@mui/material";
import {Theme} from "./themes/Themes"

function App() {

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Navbar />
        <AppRoutes />

      </ThemeProvider>
    </>
        
      
  )
}

export default App
