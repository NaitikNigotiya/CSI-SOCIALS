/* Background.jsx – clean ambient backdrop with subtle tech grid and soft diffuse light */
import './Background.css';

export default function Background() {
  return (
    <div className="bg-root" aria-hidden="true">
      <div className="bg-grid" />
      <div className="bg-ambient-top" />
      <div className="bg-ambient-bottom" />
    </div>
  );
}
