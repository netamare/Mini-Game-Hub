import { Link, NavLink } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Moon, Sun, Trophy, Gamepad2, Medal, Settings } from 'lucide-react'
import { useGame } from '../context/GameContext'
export function Layout({ children }: { children: ReactNode }) { const { dark, setDark } = useGame(); return <><header><Link className="brand" to="/"><span>✦</span> GameNest</Link><nav><NavLink to="/">Games</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/achievements">Achievements</NavLink><NavLink to="/settings">Settings</NavLink></nav><button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun /> : <Moon />}</button></header><main>{children}</main><footer><Gamepad2 /> Play. Track. Conquer. <span>© 2026 GameNest</span></footer></> }
export const Stat = ({ icon, label, value }: { icon: ReactNode; label: string; value: string | number }) => <div className="stat"><span>{icon}</span><div><b>{value}</b><small>{label}</small></div></div>
export { Trophy, Medal, Settings }
