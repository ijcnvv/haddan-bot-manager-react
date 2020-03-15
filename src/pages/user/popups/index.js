import React from "react";
import EditUser from "./modules/edit";
import Popup from "../../../components/shared/popup/popup";

const UserPopup = ({ type, closePopup, ...rest }) => {
  const types = {
    editUser: EditUser
  };
  const Component = types[type];
  return (
    <Popup closePopup={closePopup}>
      <Component closePopup={closePopup} {...rest} />
    </Popup>
  );
};

export default UserPopup;
