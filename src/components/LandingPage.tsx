import { useCallback, useRef, useState } from 'react'
import EnvelopeSticker from './EnvelopeSticker'

interface LandingPageProps {
  onYes: () => void
}

export default function LandingPage({ onYes }: LandingPageProps) {
  const areaRef = useRef<HTMLDivElement>(null)
  const [noPos, setNoPos] = useState({ top: -8, left: 'calc(50% + 72px)' })
  const [yesScale, setYesScale] = useState(1)
  const dodgeCount = useRef(0)

  const moveNoButton = useCallback(() => {
    const area = areaRef.current
    if (!area) return

    const rect = area.getBoundingClientRect()
    const btnSize = 52
    const padding = 8
    const maxX = rect.width - btnSize - padding
    const maxY = rect.height - btnSize - padding

    const newX = padding + Math.random() * maxX
    const newY = padding + Math.random() * maxY

    setNoPos({ top: newY, left: `${newX}px` })
    dodgeCount.current += 1
    setYesScale(1 + dodgeCount.current * 0.08)
  }, [])

  return (
    <div className="page page--landing fade-in">
      <div className="landing">
        <EnvelopeSticker />

        <h1 className="landing__title">Will you go on a date with me?</h1>

        <div className="button-area" ref={areaRef}>
          <button
            className="btn-yes"
            style={{ transform: `scale(${yesScale})` }}
            onClick={onYes}
          >
            Yes 💖
          </button>

          <button
            className="btn-no"
            style={{ top: noPos.top, left: noPos.left }}
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault()
              moveNoButton()
            }}
            onClick={moveNoButton}
            aria-label="No (nice try)"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
