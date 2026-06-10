import CupidCharacter from './CupidCharacter'
import ProgressHearts from './ProgressHearts'

interface CelebrationPageProps {
  onContinue: () => void
}

export default function CelebrationPage({ onContinue }: CelebrationPageProps) {
  return (
    <div className="page page--celebration fade-in">
      <ProgressHearts currentStep="celebration" />

      <div className="celebration">
        <CupidCharacter />

        <h1 className="celebration__title">
          WAIT YOU ACTUALLY SAID YES?? 😭
        </h1>

        <p className="celebration__subtitle">
          i was so ready for you to say no 😭
        </p>

        <button className="btn-continue" onClick={onContinue}>
          okay okay! →
        </button>
      </div>
    </div>
  )
}
