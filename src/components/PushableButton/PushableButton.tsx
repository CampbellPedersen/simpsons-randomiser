import React from 'react';
import './PushableButton.scss';

export const PushableButton: React.FC<{
  outline?: boolean
  onClick: () => void
}> = ({ children, onClick }) =>
  <button className="pushable-button" onClick={onClick}>{children}</button>