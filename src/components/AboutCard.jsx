/* AboutCard.jsx – short description of the club */
import './AboutCard.css';

/**
 * @param {object} props
 * @param {string} props.text   – about paragraph
 * @param {number} props.index  – stagger index
 */
export default function AboutCard({ text, index = 1 }) {
  return (
    <section
      className="about-card animate-in"
      aria-label="About CSI"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="about-header">
        <span className="about-indicator" aria-hidden="true" />
        <h2 className="about-heading">About the Chapter</h2>
      </div>
      <p className="about-body">{text}</p>
    </section>
  );
}
