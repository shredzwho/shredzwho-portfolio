import styles from "./Button.module.scss";
import { AnchorHTMLAttributes } from 'react';

// Enum is great, no changes needed here.
export enum ButtonTypes {
  PRIMARY = "primary",
  OUTLINE = "outline",
  WHITE = "white",
}

// Define props with an interface or type for clarity
type ButtonProps = {
  type: ButtonTypes;
  onClick?: () => void;
  name: string;
  href: string; // Assuming 'a' tag is intended, so href is required
  classes?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>; // Allow passing other 'a' tag props like target, rel, etc.

// Moved helper function outside the component
// It doesn't depend on component state, so it doesn't need to be redefined on every render.
function getButtonTypeStyles(type: ButtonTypes) {
  switch (type) {
    case ButtonTypes.PRIMARY:
      return styles.primary;
    case ButtonTypes.WHITE:
      return styles.white;
    case ButtonTypes.OUTLINE:
    default:
      return styles.outline;
  }
}

const Button = ({
  type,
  onClick = () => {},
  name,
  href,
  classes = "",
  ...rest // Use ...rest for 'otherProps'
}: ButtonProps) => {
  
  // Base classes remain the same
  const buttonClasses =
    "py-2 px-7 font-medium rounded text-base md:text-xl tracking-wide link duration-300 flex items-center";

  return (
    <a
      {...rest} // Spread remaining props
      onClick={onClick}
      href={href}
      className={`${getButtonTypeStyles(type)} ${buttonClasses} ${classes}`}
    >
      {name}
    </a>
  );
};

// PropTypes block is removed, as it's redundant with TypeScript.

export default Button;
