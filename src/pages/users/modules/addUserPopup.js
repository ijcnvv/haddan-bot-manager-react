import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddUser } from "../../../actions/usersActions";

import Popup from "../../../components/shared/popup/popup";
import Loader from "../../../components/shared/loader/loader";
import Select from "../../../components/shared/select/select";
import Input from "../../../components/shared/input/input";
import Button from "../../../components/shared/button/button";
import "./addUserPopup.scss";

const AddUser = ({ closePopup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading } = useSelector(({ users }) => users);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [player_id, setPlayerId] = useState("");
  const [network, setNetwork] = useState("telegram");
  const networkList = {
    telegram: "Telegram",
    skype: "Skype",
    whatsapp: "WhatsApp"
  };

  const submitClassName = `btn${loading ? " disabled" : ""}`;

  const onFormSubmit = e => {
    e.preventDefault();
    if (!name || !email || !player_id) return;
    const params = { name, email, player_id, network };
    dispatch(fetchAddUser(params, onSuccess));
  };

  const onSuccess = id => history.push(`/users/${id}`);

  return (
    <Popup closePopup={closePopup} className="visible">
      <div className="create-user">
        <Loader loading={loading} />
        <h3 className="create-user__title">Добавить пользователя</h3>
        <form>
          <div className="row">
            <Input
              className="col s12"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Имя пользователя"
              required
            />
            <Input
              className="col s12"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <Input
              type="number"
              className="col s6"
              value={player_id}
              onChange={e => setPlayerId(e.target.value)}
              placeholder="ID персонажа"
              required
            />
            <Select
              className="col s6"
              value={network}
              onChange={setNetwork}
              list={networkList}
              label="Соц. сеть"
            />
          </div>
          <Button
            type="submit"
            className={submitClassName}
            onClick={onFormSubmit}
          >
            Создать
          </Button>
        </form>
      </div>
    </Popup>
  );
};

export default AddUser;
