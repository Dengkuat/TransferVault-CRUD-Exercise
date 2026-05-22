import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './components/Layout'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path="login" element={<LogIn />} />

        <Route path="/" element={<Layout />}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
