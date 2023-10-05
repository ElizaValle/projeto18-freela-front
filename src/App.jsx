import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import HomePage from './pages/HomePage'
import ServicePage from './pages/ServicePage'
import AddServicePage from './pages/AddServicePage'
import ManageServicePage from './pages/ManageServicePage'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' exact element={<SignInPage />} />
          <Route path='/signup' exact element={<SignUpPage />} />
          <Route path='/' exact element={<HomePage />} />
          <Route path='/service' exact element={<ServicePage />} />
          <Route path='/add-service' exact element={<AddServicePage />} />
          <Route path='/manage-service' exact element={<ManageServicePage />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
