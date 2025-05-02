import './index.css'
import App from './App.tsx'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserRegistrationForm from './pages/AdminUserRegistrationForm.tsx'
import TenantRegistrationForm from './pages/TenantRegistrationForm.tsx';
import Dashboard from './pages/Dashboard.tsx'
import Payment from './pages/Payment.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route index path='/' element={<App />} />
      <Route index path='/admin/user/register' element={<UserRegistrationForm />} />
      <Route index path='/tenant/register' element={<TenantRegistrationForm />} />
      <Route index path='/dashboard' element={<Dashboard />} />
      <Route index path='/payment/:nombre' element={<Payment/>} />
    </Routes>
  </BrowserRouter>,
)
