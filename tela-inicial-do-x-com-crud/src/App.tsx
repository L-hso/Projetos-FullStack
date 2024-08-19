import { postInfo } from "./components/Timeline/Timeline Post";
import { Sidebar } from "./components/Sidebar";
import { Timeline } from "./components/Timeline";
import axios from "axios";

const posts = await axios.get("https://symmetrical-space-adventure-r9rj7pxj5jghwq54-3333.app.github.dev/posts").then<postInfo[]>(response => response.data);

function App() {
    
  return (
    <>
      <Sidebar />
      <Timeline.Body>
        <Timeline.Header />
        { posts.map(el=><Timeline.Post info={el}/>) }
      </Timeline.Body>
    </>
  );
}


export default App;



