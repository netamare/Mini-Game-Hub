import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { games } from '../data'
import { TicTacToe, MemoryMatch, NumberGuessing, RockPaperScissors } from '../games/Games'
export function GamePage() { const { gameId } = useParams(); const game = games.find(g => g.id === gameId); if (!game) return <section className="page"><h1>Game not found</h1><Link to="/">Return home</Link></section>; const content = { 'tic-tac-toe': <TicTacToe />, 'memory-match': <MemoryMatch />, 'number-guessing': <NumberGuessing />, 'rock-paper-scissors': <RockPaperScissors /> }[game.id]; return <section className="game-page"><Link className="back" to="/"><ArrowLeft size={17}/> All games</Link><div className="game-title"><span style={{ background: game.accent }}>{game.icon}</span><div><p className="eyebrow">{game.players}</p><h1>{game.title}</h1></div></div>{content}</section> }
