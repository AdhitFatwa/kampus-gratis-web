import { Link } from "react-router-dom";

export const Button = ({ children, loading, href, disabled, ...props }) => {
  if (href && !disabled) {
    return (
      <Link to={href}>
        <button {...props}>{loading ? loading : children}</button>
      </Link>
    );
  }
  return <button {...props}>{loading ? loading : children}</button>;
};
