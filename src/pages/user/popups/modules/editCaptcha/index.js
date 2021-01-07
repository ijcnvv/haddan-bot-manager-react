import React, { useState } from "react";
import AddDefaultValue from "./modules/addDefault";
import AddCustomValue from "../edit/addCustom";
import SetCustomValue from "../edit/setCustom";
import Choice from "../edit/choice";

const CashPopup = ({ ...rest }) => {
  const [path, setPath] = useState(null);
  const components = {
    add: AddDefaultValue,
    edit: SetCustomValue,
    addCustom: AddCustomValue,
    default: Choice,
  };
  const Component = components[path || "default"];

  return <Component setPath={setPath} {...rest} />;
};

export default CashPopup;
