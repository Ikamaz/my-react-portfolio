import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// CSS STYLING
import './index.css'

// COMPONENTS

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
