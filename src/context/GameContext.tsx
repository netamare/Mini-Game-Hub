import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { Achievement, HistoryItem } from '../types'
import { defaultAchievements } from '../data'

interface GameContextValue { dark: boolean; setDark: (v: boolean) => void; history: HistoryItem[]; addResult: (game: string, result: string, score: number, achievements?: string[]) => void; achievements: Achievement[] }
const GameContext = createContext<GameContextValue | undefined>(undefined)
const getStored = <T,>(key: string, fallback: T): T => { try { const value = localStorage.getItem(key); return value ? JSON.parse(value) : fallback } catch { return fallback } }
export function GameProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(() => getStored('gamenest-theme', false))
  const [history, setHistory] = useState<HistoryItem[]>(() => getStored('gamenest-history', []))
  const [achievements, setAchievements] = useState<Achievement[]>(() => getStored('gamenest-achievements', defaultAchievements))
  useEffect(() => { document.documentElement.dataset.theme = dark ? 'dark' : 'light'; localStorage.setItem('gamenest-theme', JSON.stringify(dark)) }, [dark])
  useEffect(() => localStorage.setItem('gamenest-history', JSON.stringify(history)), [history])
  useEffect(() => localStorage.setItem('gamenest-achievements', JSON.stringify(achievements)), [achievements])
  const addResult = useCallback((game: string, result: string, score: number, ids: string[] = []) => {
    setHistory(old => [{ id: crypto.randomUUID(), game, result, score, date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) }, ...old].slice(0, 30))
    setAchievements(old => old.map(a => ids.includes(a.id) || a.id === 'first-play' ? { ...a, unlocked: true } : a))
  }, [])
  return <GameContext.Provider value={{ dark, setDark, history, addResult, achievements }}>{children}</GameContext.Provider>
}
export const useGame = () => { const context = useContext(GameContext); if (!context) throw new Error('GameProvider missing'); return context }
