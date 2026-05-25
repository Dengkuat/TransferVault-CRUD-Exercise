import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
  const [details, setDetails] = useState({ name: '', email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const validate = (isLogin = false) => {
    const newErrors = {}
    if (!isLogin && !details.name) newErrors.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) newErrors.email = 'Please enter a valid email'
    if (details.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    return newErrors
  }

  const handleSubmit = async (isLogin = false) => {
    const newErrors = validate(isLogin)
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors)

    const endpoint = isLogin ? '/users/login' : '/users'
    const body = isLogin ? { email: details.email, password: details.password } : details

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })

      const data = await res.json()
      if (res.ok) {
        if (isLogin) {
          localStorage.setItem('token', data.token)
          navigate('/dashboard')
        } else {
          navigate('/login')
        }
      } else {
        setErrors({ api: data.message })
      }
    } catch (err) {
      setErrors({ api: 'Something went wrong' })
    }
  }

  return { details, showPassword, setShowPassword, errors, handleInput, handleSubmit }
}