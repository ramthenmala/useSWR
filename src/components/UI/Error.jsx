import React from "react";

const ErrorComp = ({ msg }) => {
  return (
    <div className="w-full items-ccenter justify-center flex">
      <div className="p-4 py-6 mb-4 text-sm text-red-700" role="alert">
        <div className="text-bold">{msg}</div>
      </div>
    </div>
  );
};

export default ErrorComp;
