/* HeaderCard.jsx – logo, chapter badge, club title, and tagline */
import logoSrc from '../assets/csi-logo.png';
import './HeaderCard.css';

/**
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.tagline
 * @param {number} props.index
 */
export default function HeaderCard({ title, tagline, index = 0 }) {
  return (
    <header
      className="header-card animate-in"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* ── Logo with ambient ring ────────────────────────── */}
      <div className="header-logo-container">
        <div className="header-logo-glow" aria-hidden="true" />
        <div className="header-logo-frame">
          <img
            className="header-logo-img"
            src={logoSrc}
            alt="CSI – Computer Society of India logo"
            width="80"
            height="80"
          />
        </div>
      </div>

      {/* ── Chapter Status Chip ───────────────────────────── */}
      <div className="header-chapter-badge">
        <span className="header-badge-dot" aria-hidden="true" />
        <span>Student Chapter · Est. 2017</span>
      </div>

      {/* ── Text ─────────────────────────────────────────── */}
      <h1 className="header-title">{title}</h1>
      <p className="header-tagline">{tagline}</p>
    </header>
  );
}
