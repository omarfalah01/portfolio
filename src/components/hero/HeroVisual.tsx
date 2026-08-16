import { useReducedMotion } from '../../hooks/useReducedMotion'
import './HeroVisual.css'

/** Abstract system / network visualization — no stock photos */
export function HeroVisual() {
  const reduced = useReducedMotion()

  return (
    <div className="hero-visual" aria-hidden="true">
      <div className={`hero-visual__glow${reduced ? '' : ' is-animated'}`} />
      <svg
        className="hero-visual__svg"
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hv-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3dcea7" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#3dcea7" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#6b9eff" stopOpacity="0.2" />
          </linearGradient>
          <filter id="hv-soft">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Grid rings */}
        <circle cx="240" cy="240" r="180" stroke="rgba(232,236,244,0.06)" strokeWidth="1" />
        <circle cx="240" cy="240" r="130" stroke="rgba(232,236,244,0.08)" strokeWidth="1" />
        <circle cx="240" cy="240" r="80" stroke="rgba(61,206,167,0.2)" strokeWidth="1" />

        {/* Connection paths */}
        <g className={reduced ? undefined : 'hero-visual__pulse'}>
          <path
            d="M120 160 C160 120, 200 200, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
          <path
            d="M360 140 C320 180, 280 200, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
          <path
            d="M100 300 C150 280, 200 250, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
          <path
            d="M380 320 C330 290, 280 250, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
          <path
            d="M240 80 C240 140, 240 200, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
          <path
            d="M240 400 C240 340, 240 280, 240 240"
            stroke="url(#hv-line)"
            strokeWidth="1.5"
            filter="url(#hv-soft)"
          />
        </g>

        {/* Nodes */}
        <g className={reduced ? undefined : 'hero-visual__nodes'}>
          <circle cx="120" cy="160" r="7" fill="#0f141c" stroke="#3dcea7" strokeWidth="2" />
          <circle cx="360" cy="140" r="7" fill="#0f141c" stroke="#6b9eff" strokeWidth="2" />
          <circle cx="100" cy="300" r="7" fill="#0f141c" stroke="#3dcea7" strokeWidth="2" />
          <circle cx="380" cy="320" r="7" fill="#0f141c" stroke="#6b9eff" strokeWidth="2" />
          <circle cx="240" cy="80" r="7" fill="#0f141c" stroke="#e8b84a" strokeWidth="2" />
          <circle cx="240" cy="400" r="7" fill="#0f141c" stroke="#3dcea7" strokeWidth="2" />
          <circle cx="240" cy="240" r="14" fill="#3dcea7" opacity="0.9" />
          <circle cx="240" cy="240" r="22" stroke="#3dcea7" strokeOpacity="0.35" strokeWidth="1.5" />
        </g>

        {/* Labels */}
        <g fontFamily="JetBrains Mono, monospace" fontSize="11" fill="rgba(232,236,244,0.55)">
          <text x="88" y="145">App</text>
          <text x="348" y="125">API</text>
          <text x="62" y="325">Auth</text>
          <text x="348" y="345">Server</text>
          <text x="214" y="68">Client</text>
          <text x="214" y="425">Database</text>
        </g>
      </svg>

      <div className="hero-visual__chip hero-visual__chip--a">Full-Stack</div>
      <div className="hero-visual__chip hero-visual__chip--b">Mobile</div>
      <div className="hero-visual__chip hero-visual__chip--c">PostgreSQL</div>
    </div>
  )
}
