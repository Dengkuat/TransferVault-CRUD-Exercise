import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export default function LogIn() {
  const { details, showPassword, setShowPassword, errors, handleInput, handleSubmit } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white border border-gray-200 rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-medium mb-1">Welcome back</h1>
        <p className="text-gray-500 text-sm mb-6">Login to your account</p>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Email address</label>
          <input type="email" name="email" value={details.email} onChange={handleInput}
            placeholder="you@example.com"
            className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="text-sm text-gray-500 block mb-1">Password</label>
          <div className="relative">
            <input type={showPassword ? 'text' : 'password'} name="password"
              value={details.password} onChange={handleInput} placeholder="Min. 8 characters"
              className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
            <button onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              {showPassword ? 'hide' : 'show'}
            </button>
          </div>
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        {errors.api && <p className="text-red-500 text-sm mb-3">{errors.api}</p>}

        <button onClick={() => handleSubmit(true)}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-10 text-sm font-medium mt-1 duration-500 cursor-pointer">
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <span onClick={() => navigate('/')} className="text-emerald-600 font-medium cursor-pointer">Sign up</span>
        </p>
      </div>
    </div>
  )
}