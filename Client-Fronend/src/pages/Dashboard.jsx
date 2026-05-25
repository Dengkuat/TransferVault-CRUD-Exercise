import { useNavigate } from 'react-router-dom'

const LEAGUES = [
  {
    id: 'premier-league',
    name: 'Premier League',
    country: 'England',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/23.png',
    bg: 'bg-purple-50'
  },
  {
    id: 'la-liga',
    name: 'La Liga',
    country: 'Spain',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/15.png',
    bg: 'bg-orange-50'
  },
  {
    id: 'serie-a',
    name: 'Serie A',
    country: 'Italy',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/12.png',
    bg: 'bg-blue-50'
  },
  {
    id: 'bundesliga',
    name: 'Bundesliga',
    country: 'Germany',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/10.png',
    bg: 'bg-red-50'
  },
  {
    id: 'ligue-1',
    name: 'Ligue 1',
    country: 'France',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/9.png',
    bg: 'bg-sky-50'
  },
  {
    id: 'championship',
    name: 'Championship',
    country: 'England',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/24.png',
    bg: 'bg-yellow-50'
  },
  {
    id: 'champions-league',
    name: 'Champions League',
    country: 'Europe',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/2.png',
    bg: 'bg-indigo-50'
  },
  {
    id: 'eredivisie',
    name: 'Eredivisie',
    country: 'Netherlands',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/11.png',
    bg: 'bg-orange-50'
  },
  {
    id: 'primeira-liga',
    name: 'Primeira Liga',
    country: 'Portugal',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/19.png',
    bg: 'bg-green-50'
  },
  {
    id: 'mls',
    name: 'MLS',
    country: 'USA',
    image: 'https://a.espncdn.com/i/leaguelogos/soccer/500/775.png',
    bg: 'bg-red-50'
  },
]

export default function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="p-6">
      <h1 className="text-2xl font-medium mb-1">Leagues</h1>
      <p className="text-sm text-gray-500 mb-6">Select a league to view teams</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {LEAGUES.map(league => (
          <div
            key={league.id}
            onClick={() => navigate(`/leagues/${league.id}`)}
            className="border border-gray-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 hover:shadow-md transition-all duration-150"
          >
            <div className={`w-full aspect-video ${league.bg} flex items-center justify-center p-4`}>
              <img
                src={league.image}
                alt={league.name}
                className="h-full max-h-20 object-contain"
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.parentElement.innerHTML = '<span class="text-3xl">🏆</span>'
                }}
              />
            </div>
            <div className="p-3">
              <p className="font-medium text-sm text-gray-900">{league.name}</p>
              <p className="text-xs text-gray-500">{league.country}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}