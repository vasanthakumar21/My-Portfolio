import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "./Common/themeContext.jsx"
import { ThemeProvider } from './Common/themeContext.jsx'

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <ThemeProvider>
  <App /> 
    </ThemeProvider>
  
  </StrictMode>,
)
