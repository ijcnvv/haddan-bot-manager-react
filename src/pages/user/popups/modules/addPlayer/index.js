import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAddPlayer } from "actions/userActions";
import Loader from "components/shared/loader/loader";
import PopupForm from "../form";
import "./addPlayer.scss";

const EditPropertyPopup = ({ closePopup }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector(({ user }) => user);
  const { id } = useParams();

  const onChangeHandler = player_id => {
    dispatch(fetchAddPlayer({ id, player_id }, closePopup));
  };

  return (
    <div className="add-player">
      <Loader loading={loading} />
      <h3 className="add-player__title">Добавить персонажа</h3>
      <PopupForm
        icon={false}
        onChange={onChangeHandler}
        title="Добавить"
        label="Id персонажа"
      />
    </div>
  );
};

export default EditPropertyPopup;
