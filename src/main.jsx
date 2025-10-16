import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './blog_xx.scss'
import App from './App_00.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
