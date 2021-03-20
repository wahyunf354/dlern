import Link from "next/link";
//TODO: Mau buat Button dulu
const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSecondary) className.push("btn-secondary");
  if (props.hasRounded) className.push("rounded-lg");
  if (props.hasShadow) className.push("shadow-lg");

  const onClick = () => {
    if (props.onClick) props.onClick();
  };

  if (props.isLoading || props.isDisabled) {
    if (props.isLoading) {
      className.push("text-center btn-secondary");
      return (
        <span className={className.join(" ")} style={props.style}>
          {props.isLoading ? <>Tunggu...</> : props.children}
        </span>
      );
    }
  }

  if (props.type === "link") {
    className.push("text-center");
    return (
      <Link href={props.href}>
        <a className={className.join(" ")} style={props.style}>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
