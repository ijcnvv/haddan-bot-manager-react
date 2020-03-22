import React from "react";
import Popup from "components/shared/popup/popup";
import EditUser from "./modules/edit";

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
