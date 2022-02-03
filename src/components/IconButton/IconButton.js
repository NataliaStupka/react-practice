import React from 'react';
import PropTypes from 'prop-types';
import './IconButton.css';

const IconButton = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconButton" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string,
};
// 'aria-label': PropTypes.string.isRequired,
//когда есть кнопка в которой ничего не написано, и внутри стоит иконка
//передается пропсом атрибут доступности aria-label
//для кнопок иконок aria-label ОБЯЗАТЕЛЕН

export default IconButton;
