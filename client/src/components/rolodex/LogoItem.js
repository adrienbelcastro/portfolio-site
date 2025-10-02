import "./LogoItem.scss";

export const LogoItem = ({ children, className = "" }) => {
  return <div className={`logo-item ${className}`}>{children}</div>;
};
