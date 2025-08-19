import { useEffect , useState } from "react";

function App(){
  const [currentTab , setCurrentTab] = useState ("notifications");
 
return <div>
<button onClick={()=> setCurrentTab("feed")} style={{color: currentTab == "feed" ? "red" : "black"}}>Feed</button>
<button onClick={() => setCurrentTab("notifications")} style={{color: currentTab == "notifications" ? "red" : "black"}}>Notifications</button> 
<button onClick={() => setCurrentTab ("messages")} style={{color: currentTab == "messages" ? "red" : "black"}}>messages</button>
<button onClick={()=> setCurrentTab("jobs")} style={{color: currentTab == "jobs" ? "red" : "black"}}>Jobs</button>
</div>
}

export default App