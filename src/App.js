import "./App.css";
import LeftSize from "./Components/LeftSize";
import MiddleSide from "./Components/MiddleSide";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className="App">
      <div className="leftSideHome">
        <LeftSize />
      </div>
      <div className="middleSideHome">
        <MiddleSide />
      </div>
      <div className="rightSideHome">
        <RightSide />
      </div>
    </div>
  );
}

export default App;
