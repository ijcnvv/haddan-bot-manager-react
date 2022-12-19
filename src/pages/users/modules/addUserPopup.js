import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { fetchAddUser } from 'actions/usersActions';
import PropTypes from 'prop-types';
import Popup from 'components/shared/popup/popup';
import Loader from 'components/shared/loader/loader';
import Input from 'components/shared/input/input';
import Button from 'components/shared/button/button';
import './addUserPopup.scss';

const AddUser = ({ closePopup }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const { loading } = useSelector(({ users }) => users);

  const submitClassName = `btn${loading ? ' disabled' : ''}`;
  const onSuccess = (id) => history.push(`/users/${id}`);
  const onFormSubmit = (data) => dispatch(fetchAddUser(data, onSuccess));

  return (
    <Popup closePopup={closePopup}>
      <div className="create-user">
        <Loader loading={loading} />
        <h3 className="create-user__title">Добавить пользователя</h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="row">
            <Input
              className="col s12"
              placeholder="Имя пользователя"
              name="name"
              register={register({ required: 'Name is required' })}
              error={errors.name}
            />
            <Input
              type="number"
              className="col s12"
              placeholder="ID персонажа"
              name="player_id"
              register={register({ required: 'ID is required' })}
              error={errors.player_id}
            />
          </div>
          <div className="row">
            <div className="col s12">
              <Button type="submit" className={submitClassName}>
                Создать
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Popup>
  );
};

AddUser.propTypes = {
  closePopup: PropTypes.func.isRequired,
};

export default AddUser;
