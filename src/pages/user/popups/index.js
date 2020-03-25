import React from "react";
import PropTypes from "prop-types";
import Popup from "components/shared/popup/popup";
import EditUser from "./modules/edit";
import AddPlayer from "./modules/addPlayer";

const UserPopup = ({ type, closePopup, ...rest }) => {
  const types = {
    editUser: EditUser,
    addPlayer: AddPlayer
  };
  const Component = types[type];
  return (
    <Popup closePopup={closePopup}>
      <Component closePopup={closePopup} {...rest} />
    </Popup>
  );
};

UserPopup.propTypes = {
  type: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired
};

export default UserPopup;
