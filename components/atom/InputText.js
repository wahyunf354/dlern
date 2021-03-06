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
    valuePassword,
  } = props;

  const [hasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (type === "tel") pattern = "[0-9]*";
  if (type === "password") pattern = /^(?=.*[A-Za-z])(?=.*d)[A-Za-zd]{8,}$/;

  const onChange = (event) => {
    const target = {
      target: {
        name: name,
        value: event.target.value,
      },
    };

    if (name === "confpassword") {
      if (event.target.value !== valuePassword) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "email") {
      if (!pattern.test(event.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "password") {
      const password = event.target.value;
      if (password.length < 6) setHasError(errorResponse);
      else setHasError(null);
    }

    if (type === "tel") {
      if (event.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["mb-3", outerClassName].join(" ")}>
      <input
        type={type}
        name={name}
        pattern={pattern}
        className={["input", inputClassName].join(" ")}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
      {hasError && <span className="text-red-500 text-xs">{hasError}</span>}
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
};
