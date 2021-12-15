import React from "react";
import ScrollUp from "react-scroll-up";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollUp.css";

export default function Scroll() {
  return (
    <div>
      <ScrollUp showUnder={120} duration={400}>
        <ArrowUpwardIcon className="scrollUp" />
      </ScrollUp>
    </div>
  );
}
