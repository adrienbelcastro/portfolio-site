import "./SectionLabel.scss";

export default function SectionLabel({ num, label, color }) {
  return (
    <div className="section-label">
      <span className="section-label__num font-mono" style={{ color }}>
        {num}
      </span>
      <div
        className="section-label__line"
        style={{ background: `${color}40` }}
      />
      <span className="section-label__text font-mono">{label}</span>
    </div>
  );
}
