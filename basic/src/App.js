import './App.css';
import ComponentLifeCycle from './example/comp-lifecycle-class';
import EnhancedComponent from './example/highOrder/higher-order-component';
import OriginalComponent from './example/highOrder/original-component';

function App() {
  const HOC = EnhancedComponent(OriginalComponent); 
  return (
    <div className="App">
      <ComponentLifeCycle></ComponentLifeCycle> 
      {/* <HOC></HOC> */}
    </div>
  );
}
export default App;
