export default function FoodAngel() {
  return (
    <svg
      className="food-angel"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: 80, height: 80, marginBottom: '0.5rem' }}
    >
      <ellipse cx="50" cy="18" rx="16" ry="5" fill="#ffd54f" opacity="0.7" />
      <ellipse cx="30" cy="48" rx="12" ry="18" fill="white" opacity="0.85" transform="rotate(-15 30 48)" />
      <ellipse cx="70" cy="48" rx="12" ry="18" fill="white" opacity="0.85" transform="rotate(15 70 48)" />
      <ellipse cx="50" cy="55" rx="22" ry="26" fill="#e53935" />
      <circle cx="50" cy="38" r="16" fill="#ef5350" />
      <ellipse cx="43" cy="37" rx="3" ry="4" fill="white" />
      <ellipse cx="57" cy="37" rx="3" ry="4" fill="white" />
      <circle cx="44" cy="38" r="1.5" fill="#333" />
      <circle cx="58" cy="38" r="1.5" fill="#333" />
      <path d="M44 44 Q50 48 56 44" stroke="#333" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <line x1="22" y1="42" x2="10" y2="30" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="8" cy="28" rx="4" ry="6" fill="#ccc" transform="rotate(-30 8 28)" />
      <line x1="78" y1="42" x2="90" y2="30" stroke="#bbb" strokeWidth="2" strokeLinecap="round" />
      <ellipse cx="92" cy="28" rx="3" ry="5" fill="#ccc" transform="rotate(30 92 28)" />
      <line x1="40" y1="78" x2="36" y2="92" stroke="#333" strokeWidth="3" strokeLinecap="round" />
      <line x1="60" y1="78" x2="64" y2="92" stroke="#333" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="34" cy="94" rx="7" ry="4" fill="#333" />
      <ellipse cx="66" cy="94" rx="7" ry="4" fill="#333" />
    </svg>
  )
}
