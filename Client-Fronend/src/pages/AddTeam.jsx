import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { authFetch } from '../utils/api'

const LEAGUES = [
  { id: 'premier-league', name: 'Premier League — England' },
  { id: 'la-liga', name: 'La Liga — Spain' },
  { id: 'serie-a', name: 'Serie A — Italy' },
  { id: 'bundesliga', name: 'Bundesliga — Germany' },
  { id: 'ligue-1', name: 'Ligue 1 — France' },
  { id: 'championship', name: 'Championship — England' },
  { id: 'champions-league', name: 'Champions League — Europe' },
  { id: 'eredivisie', name: 'Eredivisie — Netherlands' },
  { id: 'primeira-liga', name: 'Primeira Liga — Portugal' },
  { id: 'mls', name: 'MLS — USA' },
]

export default function AddTeam() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ league: '', name: '', price: '' })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setErrors(prev => ({ ...prev, [e.target.name]: '' }))
    setSuccess('')
  }

  const validate = () => {
    const newErrors = {}

    if (!form.league)
      newErrors.league = 'Please select a league.'

    if (!form.name.trim())
      newErrors.name = 'Please enter a team name.'
    else if (form.name.trim().length < 2)
      newErrors.name = 'Team name must be at least 2 characters.'
    else if (form.name.trim().length > 50)
      newErrors.name = 'Team name is too long.'
    else if (!/^[a-zA-Z0-9\s\-'.]+$/.test(form.name.trim()))
      newErrors.name = 'No special characters allowed.'

    if (form.price === '')
      newErrors.price = 'Please enter a price.'
    else {
      const price = parseFloat(form.price)
      if (isNaN(price))
        newErrors.price = 'Price must be a number.'
      else if (price < 1)
        newErrors.price = 'Price cannot be less than SSP 1.00.'
      else if (price > 10)
        newErrors.price = 'Price cannot exceed SSP 10.00.'
      else if (!/^\d+(\.\d{1,2})?$/.test(form.price))
        newErrors.price = 'Max 2 decimal places (e.g. SSP 4.50).'
    }

    return newErrors
  }

  const handleSubmit = async () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors)

    setLoading(true)
    try {
      const res = await authFetch('/teams', {
        method: 'POST',
        body: JSON.stringify({
          name: form.name.trim(),
          league: form.league,
          price: parseFloat(form.price)
        })
      })
      const data = await res.json()
      if (res.ok) {
        setSuccess(`${form.name} added successfully!`)
        setForm({ league: '', name: '', price: '' })
      } else {
        setErrors({ api: data.message })
      }
    } catch {
      setErrors({ api: 'Something went wrong. Try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-medium mb-1">Add a team</h1>
      <p className="text-sm text-gray-500 mb-6">Fill in the details below to add a team to a league</p>

      <div className="mb-4">
        <label className="text-sm text-gray-500 block mb-1">League</label>
        <select
          name="league"
          value={form.league}
          onChange={handleChange}
          className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="">Select a league...</option>
          {LEAGUES.map(l => (
            <option key={l.id} value={l.id}>{l.name}</option>
          ))}
        </select>
        {errors.league && <p className="text-red-500 text-xs mt-1">{errors.league}</p>}
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-500 block mb-1">Team name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Arsenal"
          className="w-full border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-500 block mb-1">Transfer price (SSP)</label>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-400">SSP</span>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="1 – 10"
            min="1"
            max="10"
            step="0.01"
            className="w-full border rounded-lg pl-12 pr-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <p className="text-xs text-gray-400 mt-1">Between SSP 1.00 and SSP 10.00</p>
        {errors.price && <p className="text-red-500 text-xs mt-1">{errors.price}</p>}
      </div>

      {errors.api && <p className="text-red-500 text-sm mb-3">{errors.api}</p>}

      {success && (
        <p className="text-emerald-600 text-sm mb-3">{success}</p>
      )}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-200 disabled:text-gray-400 text-white rounded-lg h-10 text-sm font-medium transition-colors cursor-pointer"
      >
        {loading ? 'Adding...' : 'Add team'}
      </button>

      <p className="text-sm text-gray-400 mt-4 cursor-pointer hover:text-gray-600"
        onClick={() => navigate('/dashboard')}>
        ← Back to dashboard
      </p>
    </div>
  )
}