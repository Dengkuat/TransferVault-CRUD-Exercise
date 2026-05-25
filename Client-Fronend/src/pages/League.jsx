import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { authFetch } from '../utils/api'

const LEAGUE_IMAGES = {
  'premier-league': 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
  'la-liga': 'https://a.espncdn.com/i/leaguelogos/soccer/500/15.png',
  'serie-a': 'https://a.espncdn.com/i/leaguelogos/soccer/500/12.png',
  'bundesliga': 'https://a.espncdn.com/i/leaguelogos/soccer/500/10.png',
  'ligue-1': 'https://a.espncdn.com/i/leaguelogos/soccer/500/9.png',
  'championship': 'https://a.espncdn.com/i/leaguelogos/soccer/500/24.png',
  'champions-league': 'https://a.espncdn.com/i/leaguelogos/soccer/500/2.png',
  'eredivisie': 'https://a.espncdn.com/i/leaguelogos/soccer/500/11.png',
  'primeira-liga': 'https://a.espncdn.com/i/leaguelogos/soccer/500/19.png',
  'mls': 'https://a.espncdn.com/i/leaguelogos/soccer/500/775.png',
}

export default function League() {
  const { id } = useParams()
  const [teams, setTeams] = useState([])
  const [newTeam, setNewTeam] = useState('')

  useEffect(() => {
    authFetch(`/teams/${id}`)
      .then(res => res.json())
      .then(data => setTeams(data))
  }, [id])

  const addTeam = async () => {
    if (!newTeam.trim()) return
    const res = await authFetch('/teams', {
      method: 'POST',
      body: JSON.stringify({ name: newTeam, league: id })
    })
    const data = await res.json()
    setTeams(prev => [...prev, data])
    setNewTeam('')
  }

  const deleteTeam = async (teamId) => {
    await authFetch(`/teams/${teamId}`, { method: 'DELETE' })
    setTeams(prev => prev.filter(t => t._id !== teamId))
  }

  return (
    <div className="p-6">
      <div className="flex items-center gap-3 mb-6">
        {LEAGUE_IMAGES[id] && (
          <img
            src={LEAGUE_IMAGES[id]}
            alt={id}
            className="w-10 h-10 object-contain"
            onError={e => e.target.style.display = 'none'}
          />
        )}
        <h1 className="text-2xl font-medium capitalize">
          {id.replace(/-/g, ' ')}
        </h1>
      </div>

      <div className="flex gap-2 mb-6">
        <input
          value={newTeam}
          onChange={e => setNewTeam(e.target.value)}
          placeholder="Team name"
          className="border rounded-lg px-3 h-10 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
        />
        <button
          onClick={addTeam}
          className="bg-emerald-600 text-white px-4 h-10 rounded-lg text-sm hover:bg-emerald-700"
        >
          Add Team
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {teams.length === 0 ? (
          <p className="text-gray-400 text-sm col-span-3">No teams yet. Add one above.</p>
        ) : teams.map(team => (
          <div key={team._id} className="border border-gray-200 rounded-xl p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={LEAGUE_IMAGES[id]}
                alt={id}
                className="w-6 h-6 object-contain"
                onError={e => e.target.style.display = 'none'}
              />
              <div>
                <span className="font-medium block">{team.name}</span>
                <span className="text-xs text-gray-500">SSP {team.price.toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={() => deleteTeam(team._id)}
              className="text-red-500 text-sm hover:text-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}