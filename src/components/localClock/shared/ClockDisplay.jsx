import React from "react";

const ClockDisplay = ({ date, title, timezone, offset }) => {
  return (
    <>
      <h1>Title {title}</h1>
      <h3>{date.toLocaleTimeString()}</h3>
      <p>
        {timezone} | {offset / 60}
      </p>
    </>
  );
};

export default ClockDisplay;
