import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home, Leaderboard, Achievements, SettingsPage } from './pages/Pages'
import { GamePage } from './pages/GamePage'
export function App() { return <Layout><Routes><Route path="/" element={<Home />} /><Route path="/games/:gameId" element={<GamePage />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/achievements" element={<Achievements />} /><Route path="/settings" element={<SettingsPage />} /></Routes></Layout> }
