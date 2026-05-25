import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import League from './pages/League'
import AddTeam from './pages/AddTeam'
import Settings from './pages/Settings'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/leagues/:id" element={
            <ProtectedRoute><League /></ProtectedRoute>
          } />
          <Route path="/add-team" element={
            <ProtectedRoute><AddTeam /></ProtectedRoute>
          } />
          <Route path="/settings" element={
            <ProtectedRoute><Settings /></ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}