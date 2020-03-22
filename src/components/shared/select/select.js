import React, { useState, useEffect, useRef } from "react";
import "./select.scss";

/**
 * @param {String} label
 * @param {String} value
 * @param {Function} onChange
 * @param {Object, Array} list
 * @param {String} className
 * @return {JSX}
 */

const Select = ({
  label = "",
  value = "",
  onChange,
  list,
  className = "",
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const node = useRef();

  const wrapperClasses = `input-field ${className}`;
  const listClasses = `dropdown-content select-dropdown ${
    active ? "active" : ""
  }`;

  const listFormatted = Array.isArray(list)
    ? list.reduce((acc, el) => {
        const obj =
          typeof el === "string" ? { [el]: el } : { [el.value]: el.text };
        return { ...acc, ...obj };
      }, {})
    : list;

  const itemClickHandler = itemValue => {
    onChange(itemValue);
    setActive(false);
  };

  const listRendered = Object.entries(listFormatted).map(
    ([itemValue, text], index) => {
      const itemClassname = itemValue === value ? "selected" : "";

      return (
        <li
          key={index}
          className={itemClassname}
          onClick={() => itemClickHandler(itemValue)}
        >
          <span>{text}</span>
        </li>
      );
    }
  );

  const labelRendered = label ? <label>{label}</label> : null;
  const textOfValue = listFormatted[value] || value;

  const handleClick = e => {
    if (node.current.contains(e.target)) return;

    setActive(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className={wrapperClasses} ref={node}>
      <div className="select-wrapper">
        <input
          className="select-dropdown dropdown-trigger"
          type="text"
          placeholder={label}
          value={textOfValue}
          onClick={() => setActive(true)}
          onChange={() => null}
          {...rest}
        />
        <ul className={listClasses}>{listRendered}</ul>
        <span className="material-icons caret">keyboard_arrow_down</span>
      </div>
      {labelRendered}
    </div>
  );
};

export default Select;
