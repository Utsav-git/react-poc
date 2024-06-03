import React from "react";

export const AlertButton = ({ message, children }) => {
  return (
    <button
      title="Button"
      onClick={() => {
        alert(message);
      }}
    >
      {children}
    </button>
  );
};
