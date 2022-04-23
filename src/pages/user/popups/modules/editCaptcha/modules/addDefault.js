import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/button/button';

const AddDefaultCaptcha = ({ setPath, onChange }) => {
  const values = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
  const list = values.map((value) => {
    const title = `+ ${value}`;
    return (
      <Button className="btn" key={value} onClick={() => onChange('add', value)}>
        {title}
      </Button>
    );
  });

  return (
    <>
      <i className="material-icons back" onClick={() => setPath(null)}>
        keyboard_backspace
      </i>
      <div className="cash">{list}</div>
      <Button className="btn-flat" onClick={() => setPath('addCustom')}>
        Другое
      </Button>
    </>
  );
};

AddDefaultCaptcha.propTypes = {
  setPath: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  property: PropTypes.string.isRequired,
};

export default AddDefaultCaptcha;
