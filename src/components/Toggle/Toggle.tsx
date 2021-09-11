import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';

import './Toggle.scss';

type Props = {
  value: boolean;
  onChange: (value: boolean) => void
}

export const Toggle: React.FC<Props> = ({value, onChange, children}) => {
  const [id] = useState(uuid());

  return <label className="toggle" htmlFor={id}>
    <input
      id={id}
      className="toggle-input" 
      type="checkbox"
      checked={value}
      onChange={(e) => onChange(e.target.checked)}
    />
    <span className="toggle-track">
      <span className="toggle-indicator"/>
    </span>
    {children}
  </label>
}