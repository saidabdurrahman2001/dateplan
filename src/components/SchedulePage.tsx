import { TIME_OPTIONS } from '../data'
import ProgressHearts from './ProgressHearts'

interface SchedulePageProps {
  date: string
  time: string
  onDateChange: (date: string) => void
  onTimeChange: (time: string) => void
  onNext: () => void
}

function getDefaultDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 14)
  return d.toISOString().split('T')[0]
}

export default function SchedulePage({
  date,
  time,
  onDateChange,
  onTimeChange,
  onNext,
}: SchedulePageProps) {
  const effectiveDate = date || getDefaultDate()

  return (
    <div className="page page--schedule fade-in">
      <ProgressHearts currentStep="schedule" />

      <div className="schedule-card">
        <span className="schedule-card__flower">🌸</span>

        <div className="schedule-card__header">
          <div className="schedule-card__icons">📓 🐾🐾</div>
          <h2 className="schedule-card__title">So... when are you free?</h2>
        </div>

        <div className="schedule-field">
          <label className="schedule-field__label" htmlFor="date-picker">
            Pick a Day ✨
          </label>
          <div className="date-input-wrapper">
            <input
              id="date-picker"
              type="date"
              value={effectiveDate}
              min={new Date().toISOString().split('T')[0]}
              onChange={(e) => onDateChange(e.target.value)}
            />
            <span className="date-input-wrapper__icon">📅</span>
          </div>
        </div>

        <div className="schedule-field">
          <label className="schedule-field__label" htmlFor="time-picker">
            What Time? 😋
          </label>
          <select
            id="time-picker"
            className="time-select"
            value={time}
            onChange={(e) => onTimeChange(e.target.value)}
          >
            <option value="" disabled>
              Choose a time...
            </option>
            {TIME_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button className="btn-next" disabled={!time} onClick={onNext}>
          let's go! →
        </button>

        <span className="schedule-mascot" aria-hidden="true">🫘</span>
      </div>
    </div>
  )
}
