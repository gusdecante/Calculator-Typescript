import React from "react";

import "./styles.css";

const Display = ({ value }: { value: string }) => {
  return <div className="display">{value}</div>;
};

export default Display;
