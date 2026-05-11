import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { ThemeProvider } from "@/contexts/ThemeContext";
import AuthProvider from './contexts/AuthContext'
import { Toaster } from "sonner";

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <AuthProvider>
      <HashRouter>
        <BrowserRouter basename="/Medical-Analysis/"> 
          <Toaster position="top-right" richColors/> 
          <App />
        </BrowserRouter> 
      </HashRouter>
    </AuthProvider>
  </ThemeProvider>
)
