import { FOOD_OPTIONS } from '../data'
import FoodAngel from './FoodAngel'
import ProgressHearts from './ProgressHearts'

interface FoodPageProps {
  selectedFoods: string[]
  onToggleFood: (id: string) => void
  onNext: () => void
}

export default function FoodPage({ selectedFoods, onToggleFood, onNext }: FoodPageProps) {
  return (
    <div className="page page--food fade-in">
      <ProgressHearts currentStep="food" />

      <div className="food-page">
        <FoodAngel />

        <h2 className="food-page__title">
          What are we feeling? 🍽️✨
        </h2>
        <p className="food-page__subtitle">(you can pick more than one btw)</p>

        <div className="food-grid">
          {FOOD_OPTIONS.map((food) => {
            const isSelected = selectedFoods.includes(food.id)
            return (
              <button
                key={food.id}
                className={`food-card ${isSelected ? 'food-card--selected' : ''}`}
                onClick={() => onToggleFood(food.id)}
                aria-pressed={isSelected}
              >
                <span className="food-card__emoji">{food.emoji}</span>
                <span className="food-card__name">{food.name}</span>
              </button>
            )
          })}
        </div>

        <button
          className="btn-next"
          disabled={selectedFoods.length === 0}
          onClick={onNext}
          style={{ maxWidth: 320 }}
        >
          lock it in! →
        </button>
      </div>
    </div>
  )
}
