import { Sidebar } from "./components/Sidebar";
import { Timeline } from "./components/Timeline";

function App() {
  return (
    <>
      <Sidebar />
      <Timeline.Body>
        <Timeline.Header />
      </Timeline.Body>
    </>
  );
}

export default App;
