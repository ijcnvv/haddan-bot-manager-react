import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/shared/button/button';

const Choice = ({ setPath }) => {
  return (
    <div className="wrapper">
      <Button className="btn" onClick={() => setPath('add')}>
        Добавить
      </Button>
      <Button className="btn" onClick={() => setPath('remove')}>
        Вычесть
      </Button>
      <Button className="btn-flat" onClick={() => setPath('edit')}>
        Редактировать
      </Button>
    </div>
  );
};

Choice.propTypes = {
  setPath: PropTypes.func.isRequired,
};

export default Choice;
