import ClockList from "./components/Clock-list/ClockList";
import LocalClock from "./components/localClock/LocalClock";
import useClock from "./hooks/useClock";

function App() {
  const { clock: local } = useClock();
  const { clock: pst } = useClock("PST");
  const { clock: est } = useClock("EST");
  const { clock: edt } = useClock("EDT");
  const { clock: bst } = useClock("BST");

  console.log("local-time", local?.date?.toLocaleTimeString());
  console.log("pst-time", pst?.date?.toLocaleTimeString());
  console.log("est-time", est?.date?.toLocaleTimeString());
  console.log("edt-time", edt?.date?.toLocaleTimeString());
  console.log("bsts-time", bst?.date?.toLocaleTimeString());

  return (
    <>
      <LocalClock />
      <ClockList />
    </>
  );
}

export default App;
