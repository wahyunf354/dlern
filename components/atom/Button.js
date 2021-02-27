import Link from "next/link";

export const Button = ({ type, title, href, color }) => {
  const className = ["bg-" + color, "w-min", "px-6", "py-2", "rounded-md"];
  if (type === "link") {
    return (
      <div className={className.join(" ")}>
        <Link href={href}>
          <a className="text-white">{title}</a>
        </Link>
      </div>
    );
  } else if (type === "button") {
    <button className={className.join(" ")}>{title}</button>;
  }
};
