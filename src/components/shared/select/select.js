import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./select.scss";

const Select = ({
  label = "",
  value = "",
  onChange,
  options,
  className = "",
  ...rest
}) => {
  const [active, setActive] = useState(false);
  const [filter, setFilter] = useState("");
  const node = useRef();

  const wrapperClasses = `input-field ${className}`;
  const listClasses = `dropdown-content select-dropdown ${
    active ? "active" : ""
  }`;

  const formatted = Array.isArray(options)
    ? options
    : Object.entries(options).map(([value, text]) => ({ value, text }));

  const filtered = formatted.filter(({ text }) => {
    return (
      String(text).toLowerCase().indexOf(String(filter).toLowerCase()) !== -1
    );
  });

  const sorted = [...filtered].sort((a, b) => a.text - b.text);

  const listRendered = sorted.map(({ value: itemValue, text }, index) => {
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
  });

  const labelRendered = label ? <label>{label}</label> : null;
  const textOfValue = active
    ? filter
    : sorted.find((el) => el.value === value)?.text || value;

  const itemClickHandler = (itemValue) => {
    onChange(itemValue);
    setFilter("");
    setActive(false);
  };

  const handleClick = (e) => {
    if (node.current.contains(e.target)) return;

    setActive(false);
    setFilter("");
  };

  const closeHandler = (e) => {
    e.preventDefault();
    onChange("");
    setActive(false);
  };

  const filterHandler = (e) => {
    setFilter(e.target.value);
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
          onChange={filterHandler}
          {...rest}
        />
        <ul className={listClasses}>{listRendered}</ul>
        {value && active ? (
          <span className="material-icons caret" onClick={closeHandler}>
            close
          </span>
        ) : (
          <span
            className="material-icons caret"
            onClick={() => setActive(true)}
          >
            keyboard_arrow_down
          </span>
        )}
      </div>
      {labelRendered}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Select;
