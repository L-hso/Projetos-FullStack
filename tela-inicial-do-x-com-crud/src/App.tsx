import { useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { Timeline } from "./components/Timeline";
//import axios from "axios";
import { postInfo } from "./components/Timeline/Timeline Post";



function App() {
    
  let posts;

  useEffect( ()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    posts = fetch("http://localhost:3333/posts").then<postInfo[]>(response=>response.json());
  }, [])

  return (
    <>
      <Sidebar />
      <Timeline.Body>
        <Timeline.Header />
        {(posts ?? []).map(el=><Timeline.Post info={el}/>)}
      </Timeline.Body>
    </>
  );
}


export default App;



