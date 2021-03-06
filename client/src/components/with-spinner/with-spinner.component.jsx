import React from "react";

import "./with-spinner.styles.css";

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
};

export default WithSpinner;
