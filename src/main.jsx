import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../mosey-compliance-tracker-case-study.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
