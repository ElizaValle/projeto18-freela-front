import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AddServicePage from './pages/AddServicePage'
import ManageServicesPage from './pages/ManageServicesPage'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import UserProvider from './contexts/UserContext'

function App() {

  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add" element={<AddServicePage />} /> 
          <Route path="/manage" element={<ManageServicesPage />} />
                {/* <Route path="/service/:id" element={ServiceDetailsPage} />
              
              */}
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App
