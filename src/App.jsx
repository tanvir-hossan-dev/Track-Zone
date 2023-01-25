import ClockList from "./components/Clock-list/ClockList";
import LocalClock from "./components/localClock/LocalClock";
import useClock from "./hooks/useClock";

function App() {
  const { date: localDate, timezone, offset } = useClock();

  return (
    <>
      {localDate && <LocalClock date={localDate} timezone={timezone} offset={offset} />}
      <ClockList />
    </>
  );
}

export default App;
