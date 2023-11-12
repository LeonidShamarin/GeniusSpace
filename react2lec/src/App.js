import RenderComponent from './RenderComponent';
import './App.css';
import RenderSecond from './RenderSecond';
import RenderThree from './RenderThree';
import RenderColection from './RenderColection';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <RenderComponent/>
       <RenderSecond/>
       <RenderThree/>
       <RenderColection/>
      </header>
    </div>
  );
}

export default App;
