import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './contexts/AuthContext'
import { Toaster } from "sonner";

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter basename="/Medical-Analysis/"> 
      <Toaster /> 
      <App />
    </BrowserRouter> 
  </AuthProvider>
)
