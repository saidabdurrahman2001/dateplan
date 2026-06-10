import { getProgressIndex } from '../data'
import type { Step } from '../types'

interface ProgressHeartsProps {
  currentStep: Step
  totalSteps?: number
}

export default function ProgressHearts({ currentStep, totalSteps = 4 }: ProgressHeartsProps) {
  const currentIndex = getProgressIndex(currentStep)

  return (
    <div className="progress-hearts">
      {Array.from({ length: totalSteps }, (_, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && (
            <span
              className={`progress-hearts__line ${i <= currentIndex ? 'progress-hearts__line--active' : ''}`}
            />
          )}
          <span
            className={`progress-heart ${i <= currentIndex ? 'progress-heart--active' : 'progress-heart--inactive'}`}
          >
            {i <= currentIndex ? '❤️' : '🤍'}
            {i === currentIndex && <span className="progress-heart__star">✨</span>}
          </span>
        </span>
      ))}
    </div>
  )
}
