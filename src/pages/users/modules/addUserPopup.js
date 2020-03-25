import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { fetchAddUser } from "actions/usersActions";
import Popup from "components/shared/popup/popup";
import Loader from "components/shared/loader/loader";
import Select from "components/shared/select/select";
import Input from "components/shared/input/input";
import Button from "components/shared/button/button";
import "./addUserPopup.scss";

const AddUser = ({ closePopup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors, control } = useForm();
  const { loading } = useSelector(({ users }) => users);
  const networkList = {
    telegram: "Telegram",
    skype: "Skype",
    whatsapp: "WhatsApp"
  };
  const submitClassName = `btn${loading ? " disabled" : ""}`;
  const onSuccess = id => history.push(`/users/${id}`);
  const onFormSubmit = data => dispatch(fetchAddUser(data, onSuccess));

  return (
    <Popup closePopup={closePopup} className="visible">
      <div className="create-user">
        <Loader loading={loading} />
        <h3 className="create-user__title">Добавить пользователя</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="row">
            <Input
              className="col s12"
              placeholder="Имя пользователя"
              name="name"
              register={register({ required: "Name is required" })}
              error={errors.name}
            />
            <Input
              className="col s12"
              placeholder="Email"
              type="email"
              name="email"
              register={register({ required: "Email is required" })}
              error={errors.email}
            />
            <Input
              type="number"
              className="col s6"
              placeholder="ID персонажа"
              name="player_id"
              register={register({ required: "ID is required" })}
              error={errors.player_id}
            />
            <Controller
              as={Select}
              name="network"
              control={control}
              label="Соц. сеть"
              className="col s6"
              defaultValue="telegram"
              options={networkList}
            />
          </div>
          <Button type="submit" className={submitClassName}>
            Создать
          </Button>
        </form>
      </div>
    </Popup>
  );
};

export default AddUser;
