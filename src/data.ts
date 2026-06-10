import type { FoodOption, TimeOption } from './types'

export const TIME_OPTIONS: TimeOption[] = [
  { value: '17:00', label: '5:00 PM – we eating with the retirees' },
  { value: '18:00', label: '6:00 PM – this is the right answer tbh' },
  { value: '19:00', label: '7:00 PM – you\'re making me hungry already' },
  { value: '20:00', label: '8:00 PM – we eating dinner or breakfast?' },
  { value: '21:00', label: '9:00 PM – late night fun fun 🌙' },
]

export const FOOD_OPTIONS: FoodOption[] = [
  { id: 'pizza', name: 'Pizza', emoji: '🍕', cuisine: 'Italian' },
  { id: 'sushi', name: 'Sushi', emoji: '🍣', cuisine: 'Japanese' },
  { id: 'burgers', name: 'Burgers', emoji: '🍔', cuisine: 'American' },
  { id: 'pasta', name: 'Pasta', emoji: '🍝', cuisine: 'Italian' },
  { id: 'tacos', name: 'Tacos', emoji: '🌮', cuisine: 'Mexican' },
  { id: 'ramen', name: 'Ramen', emoji: '🍜', cuisine: 'Japanese' },
]

export const PROGRESS_STEPS = ['celebration', 'schedule', 'food', 'confirmation'] as const

export function getProgressIndex(step: string): number {
  return PROGRESS_STEPS.indexOf(step as (typeof PROGRESS_STEPS)[number])
}
