import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import '@fontsource/open-sauce-sans/400.css'
import '@fontsource/open-sauce-sans/500.css'
import '@fontsource/open-sauce-sans/600.css'
import '@fontsource/open-sauce-sans/700.css'
import '@fontsource/open-sauce-sans/800.css'
import '@fontsource/peace-sans/400.css'
import './index.css'
import App from './App.jsx'
import HomeSolarPage from './pages/HomeSolarPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/solar-for-home" element={<HomeSolarPage />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
