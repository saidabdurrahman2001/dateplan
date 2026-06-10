export type Step = 'landing' | 'celebration' | 'schedule' | 'food' | 'confirmation'

export interface DatePlan {
  date: string
  time: string
  timeLabel: string
  foods: string[]
}

export interface TimeOption {
  value: string
  label: string
}

export interface FoodOption {
  id: string
  name: string
  emoji: string
  cuisine: string
}
