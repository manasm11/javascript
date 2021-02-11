import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  buttonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  buttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/' className='btn-mobile'>
      <button
        className={`btn ${buttonStyle} ${buttonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

const STYLES = ['btn--primary', 'btn--'];
const SIZES = ['btn--medium', 'btn--large'];

Button.propTypes = {
  type: PropTypes.string,
};
