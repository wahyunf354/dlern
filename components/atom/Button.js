import Link from "next/link";
//TODO: Mau buat Button dulu
const Button = (props) => {
  const className = [props.className];
  if (props.isPrimary) className.push("btn-primary");
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
          {props.isLoading ? <>Loading...</> : props.children}
        </span>
      );
    }
  }

  if (props.type === "link") {
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
