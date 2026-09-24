import "./DevGuideOverlay.css";

export default function DevGuideOverlay({ src }) {
  return (
    <div className="dev-guide-overlay">
      <img src={src} alt="" aria-hidden="true" />
    </div>
  );
}
