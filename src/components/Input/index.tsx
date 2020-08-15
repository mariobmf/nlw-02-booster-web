/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { InputHTMLAttributes } from 'react';

import './styles.css';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<IProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default Input;
