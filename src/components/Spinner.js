import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Spinner() {
  return (
    <div className="spinner">
      <CircularProgress style={{ color: "#7f0000" }} size={60} />
    </div>
  );
}
