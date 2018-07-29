import React from 'react';
import PropTypes from 'prop-types';

import PrimaryButton from './components/PrimaryButton';
import SecondaryButton from './components/SecondaryButton';

const Buttons = {
  primary: PrimaryButton,
  secondary: SecondaryButton,
};

const Button = ({ variant, ...props }) => {
  const ButtonVariant = Buttons[variant];
  return <ButtonVariant {...props} />;
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  variant: 'primary',
};

export default Button;
