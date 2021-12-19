import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './loader.scss';

const Loader = ({ abs = true, loading = true, className = '' }) => {
  const classes = ['lds-wrapper', className];
  if (abs) classes.push('abs');

  return (
    <Fragment>
      {loading ? (
        <div className={classes.join(' ')}>
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
      ) : null}
    </Fragment>
  );
};

Loader.propTypes = {
  abs: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Loader;
