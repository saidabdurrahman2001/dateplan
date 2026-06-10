export default function CupidCharacter() {
  return (
    <svg
      className="cupid-character"
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <text x="10" y="30" fontSize="10" className="confetti" style={{ animationDelay: '0s' }}>🎊</text>
      <text x="130" y="25" fontSize="9" className="confetti" style={{ animationDelay: '0.3s' }}>✨</text>
      <text x="20" y="130" fontSize="8" className="confetti" style={{ animationDelay: '0.6s' }}>🎉</text>
      <text x="125" y="120" fontSize="9" className="confetti" style={{ animationDelay: '0.9s' }}>⭐</text>
      <text x="70" y="20" fontSize="8" className="confetti" style={{ animationDelay: '0.2s' }}>💫</text>

      <ellipse cx="55" cy="95" rx="18" ry="10" fill="white" opacity="0.6" />
      <ellipse cx="105" cy="95" rx="18" ry="10" fill="white" opacity="0.6" />

      <ellipse cx="80" cy="75" rx="28" ry="32" fill="#e53935" />
      <circle cx="80" cy="48" r="22" fill="#ef5350" />

      <ellipse cx="68" cy="46" rx="5" ry="6" fill="white" />
      <ellipse cx="92" cy="46" rx="5" ry="6" fill="white" />
      <circle cx="69" cy="47" r="2.5" fill="#333" />
      <circle cx="93" cy="47" r="2.5" fill="#333" />

      <path d="M72 56 Q80 64 88 56" stroke="#333" strokeWidth="2" fill="none" strokeLinecap="round" />

      <ellipse cx="80" cy="22" rx="14" ry="4" fill="#ffd54f" opacity="0.8" />
      <text x="72" y="18" fontSize="10">😇</text>

      <ellipse cx="45" cy="70" rx="14" ry="22" fill="white" opacity="0.85" transform="rotate(-20 45 70)" />
      <ellipse cx="115" cy="70" rx="14" ry="22" fill="white" opacity="0.85" transform="rotate(20 115 70)" />

      <line x1="55" y1="95" x2="40" y2="60" stroke="#e53935" strokeWidth="6" strokeLinecap="round" />
      <line x1="105" y1="95" x2="120" y2="60" stroke="#e53935" strokeWidth="6" strokeLinecap="round" />

      <circle cx="38" cy="55" r="7" fill="white" stroke="#ddd" strokeWidth="1" />
      <circle cx="122" cy="55" r="7" fill="white" stroke="#ddd" strokeWidth="1" />

      <line x1="65" y1="105" x2="58" y2="135" stroke="#333" strokeWidth="5" strokeLinecap="round" />
      <line x1="95" y1="105" x2="102" y2="135" stroke="#333" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="55" cy="138" rx="10" ry="5" fill="#333" />
      <ellipse cx="105" cy="138" rx="10" ry="5" fill="#333" />
    </svg>
  )
}
