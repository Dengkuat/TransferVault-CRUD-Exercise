import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignUp() {
  const [details, setDetails] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleInput = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!details.name) newErrors.name = 'Please enter your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) newErrors.email = 'Please enter a valid email'
    if (details.password.length < 8) newErrors.password = 'Password must be at least 8 characters'
    return newErrors
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors)

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(details)
      })

      const data = await res.json()
      if (res.ok) {
        navigate('/login')
      } else {
        setErrors({ api: data.message })
      }
    } catch (err) {
      setErrors({ api: 'Something went wrong' })
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-medium mb-1">Create an account</h1>
        <p className="text-gray-500 text-sm mb-6">Do you want to be champions like arsenal 👀</p>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Full name</label>
          <input 
          type="text" 
          name="name" 
          value={details.name} 
          onChange={handleInput}
          placeholder="First Last" 
          className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Email address</label>
          <input 
          type="email" 
          name="email" 
          value={details.email} 
          onChange={handleInput}
          placeholder="you@example.com" 
          className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Password</label>
          <div className="relative">
            <input 
            type={showPassword ? 'text' : 'password'} 
            name="password"
            value={details.password} onChange={handleInput}
            placeholder="Min. 8 characters"
            className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
            <button onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {showPassword ? 'hide' : 'show'}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {errors.api && <p className="text-red-500 text-sm mb-3">{errors.api}</p>}

        <button onClick={handleSubmit}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-10 text-sm font-medium mt-1 duration-500 cursor-pointer">
          Create account
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <span onClick={() => navigate('/login')} className="text-emerald-600 font-medium cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  )
}