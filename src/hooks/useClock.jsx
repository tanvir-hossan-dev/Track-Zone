import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

const TIMEZONE_OFFSET = {
  PST: -8 * 60,
  EST: -5 * 60,
  EDT: -5 * 60,
  BST: 1 * 60,
};

const useClock = (timezone, offset = 0) => {
  const [localDate, setLocalDate] = useState(null);
  const [locaOffset, setLocalOffset] = useState(0);
  const [utc, setUtc] = useState(null);
  useEffect(() => {
    let d = new Date();
    const lo = d.getTimezoneOffset();
    d = addMinutes(d, lo);
    setUtc(d);
    setLocalOffset(lo);
  }, []);

  useEffect(() => {
    if (utc !== null && timezone) {
      offset = TIMEZONE_OFFSET[timezone] ?? offset;
      const newUtc = addMinutes(utc, offset);
      setLocalDate(newUtc);
    } else {
      const newUtc = addMinutes(utc, locaOffset);
      setLocalDate(newUtc);
    }
  }, [utc]);

  return {
    date: localDate,
    dateUTC: utc,
    offset,
    timezone,
  };
};

export default useClock;
