import { Achievement, GameInfo } from './types'
export const games: GameInfo[] = [
  { id: 'tic-tac-toe', title: 'Tic-Tac-Toe', description: 'The timeless strategy showdown.', icon: '✕', accent: '#8257e5', players: '2 players' },
  { id: 'memory-match', title: 'Memory Match', description: 'Find every matching pair.', icon: '◈', accent: '#f59e0b', players: 'Solo' },
  { id: 'number-guessing', title: 'Number Guessing', description: 'Can you find the secret number?', icon: '#', accent: '#06b6d4', players: 'Solo' },
  { id: 'rock-paper-scissors', title: 'Rock Paper Scissors', description: 'Take on the computer.', icon: '✊', accent: '#ef476f', players: 'vs CPU' },
]
export const defaultAchievements: Achievement[] = [
  { id: 'first-play', title: 'First Steps', description: 'Finish your first game', icon: '🌱', unlocked: false },
  { id: 'ttt-win', title: 'Three in a Row', description: 'Win a Tic-Tac-Toe game', icon: '🏆', unlocked: false },
  { id: 'memory-master', title: 'Sharp Mind', description: 'Complete Memory Match', icon: '🧠', unlocked: false },
  { id: 'lucky-seven', title: 'Lucky Seven', description: 'Guess a number in 7 tries or fewer', icon: '✨', unlocked: false },
  { id: 'rps-streak', title: 'Champion', description: 'Win Rock Paper Scissors', icon: '⚡', unlocked: false },
]
