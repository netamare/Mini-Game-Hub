import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import { GameProvider } from './context/GameContext'
import './styles.css'

createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><GameProvider><App /></GameProvider></BrowserRouter></React.StrictMode>)
