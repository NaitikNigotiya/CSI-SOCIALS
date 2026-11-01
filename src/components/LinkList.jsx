/* LinkList.jsx – maps over the links array and renders LinkButtons */
import { Fragment } from 'react';
import LinkButton from './LinkButton.jsx';
import './LinkList.css';

/**
 * @param {object} props
 * @param {Array}  props.links       – [{ label, url, icon }, …]
 * @param {number} props.startIndex  – animation stagger offset
 */
export default function LinkList({ links = [], startIndex = 2 }) {
  return (
    <nav aria-label="Social links" className="link-nav">
      <div className="link-section-label">Connect &amp; Follow</div>
      <ul className="link-list">
        {links.map((link, i) => (
          <Fragment key={link.label}>
            <LinkButton
              label={link.label}
              url={link.url}
              icon={link.icon}
              animDelay={(startIndex + i) * 70}
            />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
}
