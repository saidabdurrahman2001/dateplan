import { useState } from 'react'
import CelebrationPage from './components/CelebrationPage'
import ConfirmationPage from './components/ConfirmationPage'
import FoodPage from './components/FoodPage'
import LandingPage from './components/LandingPage'
import SchedulePage from './components/SchedulePage'
import type { DatePlan, Step } from './types'

function getDefaultDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toISOString().split('T')[0]
}

export default function App() {
  const [step, setStep] = useState<Step>('landing')
  const [plan, setPlan] = useState<DatePlan>({
    date: getDefaultDate(),
    time: '18:00',
    timeLabel: '',
    foods: [],
  })

  const toggleFood = (id: string) => {
    setPlan((prev) => ({
      ...prev,
      foods: prev.foods.includes(id)
        ? prev.foods.filter((f) => f !== id)
        : [...prev.foods, id],
    }))
  }

  switch (step) {
    case 'landing':
      return <LandingPage onYes={() => setStep('celebration')} />

    case 'celebration':
      return <CelebrationPage onContinue={() => setStep('schedule')} />

    case 'schedule':
      return (
        <SchedulePage
          date={plan.date}
          time={plan.time}
          onDateChange={(date) => setPlan((p) => ({ ...p, date }))}
          onTimeChange={(time) => setPlan((p) => ({ ...p, time }))}
          onNext={() => setStep('food')}
        />
      )

    case 'food':
      return (
        <FoodPage
          selectedFoods={plan.foods}
          onToggleFood={toggleFood}
          onNext={() => setStep('confirmation')}
        />
      )

    case 'confirmation':
      return <ConfirmationPage plan={plan} />

    default:
      return null
  }
}
