import React, { useState } from "react";
import Choice from "./modules/choice";
import AddDefaultValue from "./modules/addDefault";
import AddCustomValue from "./modules/addCustom";
import SetCustomValue from "./modules/setCustom";

const CashPopup = ({ ...rest }) => {
  const [path, setPath] = useState(null);
  const components = {
    add: AddDefaultValue,
    edit: SetCustomValue,
    addCustom: AddCustomValue,
    default: Choice
  };
  const Component = components[path || "default"];

  return <Component setPath={setPath} {...rest} />;
};

export default CashPopup;
