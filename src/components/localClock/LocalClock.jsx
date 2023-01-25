import React from "react";
import ClockDisplay from "./shared/ClockDisplay";

const LocalClock = ({ date, timezone, offset }) => {
  return (
    <>
      <ClockDisplay date={date} title="My Clock" timezone={timezone} offset={offset} />
    </>
  );
};

export default LocalClock;
