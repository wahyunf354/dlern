import React, { useState } from "react";
import propTypes from "prop-types";

export default function Text(props) {
  const {
    value,
    type,
    name,
    outerClassName,
    inputClassName,
    errorResponse,
    placeholder,
    password,
  } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "password") {
      const password = event.target.value;
      if (password.length < 6) setHasError(errorResponse);
      else setHasError(null);
    }

    if (name === "confpassword") {
      if (event.target.value === password) setHasError(null);
      else setHasError(errorResponse);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  let borderError = "";
  if (hasError) {
    borderError = "border-red-500";
  } else {
    borderError = "";
  }

  return (
    <div className={["mb-3", outerClassName].join(" ")}>
      <input
        type={type}
        name={name}
        pattern={pattern}
        className={["input", borderError, inputClassName].join(" ")}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      <div className="overflow-hidden h-5">
        {hasError && <span className="text-red-500 text-xs">{hasError}</span>}
      </div>
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here...",
  errorResponse: "Please match the requested format.",
};

Text.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  onChange: propTypes.func.isRequired,
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  type: propTypes.string,
  placeholder: propTypes.string,
  errorResponse: propTypes.string,
  outerClassName: propTypes.string,
  inputClassName: propTypes.string,
  password: propTypes.string,
};
