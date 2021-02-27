import Link from "next/link";

export const Button = ({ type, title, href, className }) => {
  if (type === "link") {
    return (
      <div className={"w-min px-6 py-2 rounded-md " + className}>
        <Link href={href}>
          <a className="text-white">{title}</a>
        </Link>
      </div>
    );
  } else if (type === "button") {
    <button className={className.join(" ")}>{title}</button>;
  }
};
