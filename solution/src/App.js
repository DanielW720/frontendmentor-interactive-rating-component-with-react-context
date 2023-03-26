import './App.css';
import Rating from './components/feedback/Rating';
import ThankYou from './components/feedback/ThankYou';

function App() {
  return (
    <div className="App">
      <main>
        <Rating />
        {/* temporary div */}
        {/* <div style={{ "marginTop": "30px" }}></div>
        <ThankYou /> */}
      </main>
    </div>
  );
}

export default App;
