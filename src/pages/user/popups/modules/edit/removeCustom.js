import React from 'react';
import PropTypes from 'prop-types';
import PopupForm from '../form';

const RemoveCustomCashValue = ({ setPath, onChange }) => {
  return (
    <PopupForm
      className="wrapper"
      onBack={() => setPath(null)}
      onChange={(count) => onChange('remove', count)}
      title="Вычесть"
    />
  );
};

RemoveCustomCashValue.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RemoveCustomCashValue;
