import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  const initials = () => {
    const name = localStorage.getItem('userName') || 'U'
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <nav className="flex items-center justify-between px-6 h-14 bg-white border-b border-gray-100">

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm">⇄</span>
        </div>
        <span className="font-medium text-gray-900">TransferVault</span>

        <div className="flex items-center gap-1 ml-6">
          <span onClick={() => navigate('/dashboard')}
            className="text-sm text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-lg cursor-pointer">
            Dashboard
          </span>

          <span onClick={() => navigate('/add-team')}
            className="text-sm text-gray-500 hover:bg-gray-100 px-3 py-1.5 rounded-lg cursor-pointer">
            + Add team
          </span>
          
        </div>
      </div>

      <div className="flex items-center gap-2">
      <span onClick={() => navigate('/settings')}
  className="text-sm text-gray-500 hover:bg-gray-100 px-3 py-1.5 rounded-lg cursor-pointer">
  Settings
</span>
        <div className="w-8 h-8 border border-gray-200 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">
          🔔
        </div>
        <button onClick={handleLogout}
          className="text-sm text-gray-500 border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-red-50 hover:text-red-700 hover:border-red-200 transition-colors cursor-pointer">
          Log out
        </button>
      </div>

    </nav>
  )
}