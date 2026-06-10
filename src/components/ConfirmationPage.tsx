import { useState } from 'react'
import { FOOD_OPTIONS, TIME_OPTIONS } from '../data'
import type { DatePlan } from '../types'
import ProgressHearts from './ProgressHearts'

interface ConfirmationPageProps {
  plan: DatePlan
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T12:00:00')
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  })
}

function formatTime(timeValue: string): string {
  const [hours, minutes] = timeValue.split(':').map(Number)
  const period = hours >= 12 ? 'PM' : 'AM'
  const h = hours % 12 || 12
  return `${h}:${minutes.toString().padStart(2, '0')} ${period}`
}

function getFoodNames(foodIds: string[]): string {
  return foodIds
    .map((id) => FOOD_OPTIONS.find((f) => f.id === id)?.cuisine ?? FOOD_OPTIONS.find((f) => f.id === id)?.name)
    .filter(Boolean)
    .join(', ')
}

export default function ConfirmationPage({ plan }: ConfirmationPageProps) {
  const [copied, setCopied] = useState(false)

  const timeLabel = TIME_OPTIONS.find((t) => t.value === plan.time)?.label ?? plan.time
  const displayTime = formatTime(plan.time)
  const foodDisplay = getFoodNames(plan.foods)

  const copyText = `It's a date! 💌\n\n📅 ${formatDate(plan.date)} at ${displayTime}\n🍽️ ${foodDisplay}\n\n(${timeLabel})`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      const textarea = document.createElement('textarea')
      textarea.value = copyText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="page page--confirmation fade-in">
      <ProgressHearts currentStep="confirmation" />

      <div className="confirm-card">
        <h1 className="confirm-card__title">
          It's a date! <span>💌</span>
        </h1>

        <p className="confirm-card__subtitle">
          cool cool cool. {displayTime}. pretending i'm not freaking out rn 🫠
        </p>

        <p className="confirm-card__note">
          p.s. normal people text. i made a website during lunch. for you. no big deal.
        </p>

        <div className="confirm-details">
          <div className="confirm-detail">
            <span className="confirm-detail__icon">📅</span>
            <div>
              <div className="confirm-detail__label">When</div>
              <div className="confirm-detail__value">{formatDate(plan.date)}</div>
              <div className="confirm-detail__value confirm-detail__value--secondary">
                at {displayTime}
              </div>
            </div>
          </div>

          <div className="confirm-detail">
            <span className="confirm-detail__icon">🍽️</span>
            <div>
              <div className="confirm-detail__label">Food</div>
              <div className="confirm-detail__value confirm-detail__value--secondary">
                {foodDisplay}
              </div>
            </div>
          </div>
        </div>

        <button
          className={`btn-copy ${copied ? 'btn-copy--copied' : ''}`}
          onClick={handleCopy}
        >
          {copied ? '✓ Copied!' : (
            <>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
              </svg>
              Copy plan &amp; text me
            </>
          )}
        </button>

        <button className="btn-built" type="button">
          <span>⚡</span> Made with love
        </button>
      </div>
    </div>
  )
}
