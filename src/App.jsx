import "./App.css";
import UserProfile from "./UserProfile";
import profiles from "./data.json";

function App() {
  return (
    <>
      <UserProfile profiles={profiles} />
    </>
  );
}

export default App;
