import React from 'react';
import { useToast } from '../context/ToastContext';


export const Toast = () => {
  const { progress, isVisible } = useToast();

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '300px',
        padding: '10px',
        background: '#fff',
        border: '1px solid #ccc',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
      }}
    >
      <div style={{ marginBottom: '10px' }}>Publishing...</div>
      <div
        style={{
          width: '100%',
          height: '10px',
          background: '#f3f3f3',
          borderRadius: '5px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            background: '#4caf50',
            transition: 'width 0.2s',
          }}
        ></div>
      </div>
    </div>
  );
};
