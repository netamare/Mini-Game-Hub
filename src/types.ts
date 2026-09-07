export type GameId = 'tic-tac-toe' | 'memory-match' | 'number-guessing' | 'rock-paper-scissors'
export interface GameInfo { id: GameId; title: string; description: string; icon: string; accent: string; players: string }
export interface HistoryItem { id: string; game: string; result: string; score: number; date: string }
export interface Achievement { id: string; title: string; description: string; icon: string; unlocked: boolean }
