/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;
}

const TextArea: React.FC<IProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default TextArea;
