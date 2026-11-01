/* LinkButton.jsx – sleek, modern glass card for social links */
import { Icon } from './icons.jsx';
import './LinkButton.css';

/**
 * Parses label into title and subtitle for a polished two-tier card layout.
 */
function parseLinkDetails(label, url) {
  if (label.includes(': ')) {
    const [title, ...rest] = label.split(': ');
    return { title, subtitle: rest.join(': ') };
  }
  if (label.includes(':')) {
    const [title, ...rest] = label.split(':');
    return { title, subtitle: rest.join(':').trim() };
  }

  // If no colon, extract domain or clean descriptor
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '');
    return { title: label, subtitle: hostname };
  } catch {
    return { title: label, subtitle: null };
  }
}

/**
 * @param {object} props
 * @param {string} props.label
 * @param {string} props.url
 * @param {string} props.icon
 * @param {number} props.animDelay
 */
export default function LinkButton({ label, url, icon, animDelay = 0 }) {
  const isMail = url.startsWith('mailto:');
  const externalProps = isMail
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

  const { title, subtitle } = parseLinkDetails(label, url);

  return (
    <li
      className="link-card-item animate-in"
      style={{ animationDelay: `${animDelay}ms` }}
    >
      <a
        href={url}
        className="link-card"
        aria-label={label}
        {...externalProps}
      >
        {/* Left icon badge */}
        <div className="link-card-icon-box" aria-hidden="true">
          <Icon name={icon} size={20} />
        </div>

        {/* Center label content */}
        <div className="link-card-content">
          <span className="link-card-title">{title}</span>
          {subtitle && <span className="link-card-subtitle">{subtitle}</span>}
        </div>

        {/* Right action arrow */}
        <div className="link-card-arrow" aria-hidden="true">
          <Icon name="arrowUpRight" size={16} />
        </div>
      </a>
    </li>
  );
}
