/* Footer.jsx – glass chip with copyright text */
import './Footer.css';

/**
 * @param {object} props
 * @param {string} props.text    – footer copy
 * @param {number} props.index   – stagger index
 */
export default function Footer({ text, index = 8 }) {
  return (
    <footer
      className="footer-wrap animate-in"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      <div className="footer-chip">
        <span className="footer-chip-icon" aria-hidden="true">✦</span>
        <span>{text}</span>
      </div>
    </footer>
  );
}
