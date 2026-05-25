import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authFetch } from '../utils/api'

export default function Settings() {
  const navigate = useNavigate()
  const [showConfirm, setShowConfirm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const name = localStorage.getItem('userName') || 'User'
  const email = localStorage.getItem('userEmail') || ''

  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()

  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')
  }

  const handleDelete = async () => {
    setLoading(true)
    try {
      const res = await authFetch('/users/me', { method: 'DELETE' })
      if (res.ok) {
        localStorage.clear()
        navigate('/')
      } else {
        const data = await res.json()
        setError(data.message || 'Failed to delete account')
      }
    } catch {
      setError('Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-medium mb-1">Settings</h1>
      <p className="text-sm text-gray-500 mb-6">Manage your account</p>

      {/* Avatar + info */}
      <div className="border border-gray-200 rounded-xl p-5 flex items-center gap-4 mb-4">
        <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white text-lg font-medium">
          {initials}
        </div>
        <div>
          <p className="font-medium text-gray-900">{name}</p>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>

      {/* Theme toggle — coming soon */}
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm text-gray-900">Theme</p>
            <p className="text-xs text-gray-400 mt-0.5">Light / Dark mode</p>
          </div>
          <span className="text-xs text-gray-400 border border-gray-200 px-2 py-1 rounded-lg">
            Coming soon
          </span>
        </div>
      </div>

      {/* Logout */}
      <div className="border border-gray-200 rounded-xl p-5 mb-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm text-gray-900">Log out</p>
            <p className="text-xs text-gray-400 mt-0.5">Sign out of your account</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer transition-colors"
          >
            Log out
          </button>
        </div>
      </div>

      {/* Delete account */}
      <div className="border border-red-100 rounded-xl p-5">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium text-sm text-red-600">Delete account</p>
            <p className="text-xs text-gray-400 mt-0.5">Permanently remove your account</p>
          </div>
          <button
            onClick={() => setShowConfirm(true)}
            className="text-sm border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-50 text-red-600 cursor-pointer transition-colors"
          >
            Delete
          </button>
        </div>

        {showConfirm && (
          <div className="mt-4 pt-4 border-t border-red-100">
            <p className="text-sm text-gray-600 mb-3">
              Are you sure? This cannot be undone. All your data will be permanently deleted.
            </p>
            {error && <p className="text-red-500 text-xs mb-2">{error}</p>}
            <div className="flex gap-2">
              <button
                onClick={handleDelete}
                disabled={loading}
                className="bg-red-600 hover:bg-red-700 disabled:bg-red-300 text-white text-sm px-4 py-1.5 rounded-lg cursor-pointer transition-colors"
              >
                {loading ? 'Deleting...' : 'Yes, delete my account'}
              </button>
              <button
                onClick={() => { setShowConfirm(false); setError('') }}
                className="text-sm border border-gray-200 px-4 py-1.5 rounded-lg hover:bg-gray-50 text-gray-600 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}