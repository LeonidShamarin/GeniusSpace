import "./App.css";
import MemoReact from "./MemoReact";
import ParentUseCounter from "./ParentUseCounter";
// import Memo from "./Memo";
// import Callback from "./Callback";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Memo/>
          <Callback/> */}
        <MemoReact />
        <ParentUseCounter/>
      </header>
    </div>
  );
}

export default App;
