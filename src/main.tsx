import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserRegistrationForm from './pages/UserRegistrationForm.tsx'
import TenantRegistrationForm from './pages/TenantRegistrationForm.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<App />} />
      <Route index path='/admin/user/register' element={<UserRegistrationForm />} />
      <Route index path='/tenant/register' element={ <TenantRegistrationForm/> } />
    </Routes>
  </BrowserRouter>,
)
