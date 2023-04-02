import './App.css';
import { Fragment } from 'react';
import Rating from './components/feedback/Rating';
import ThankYou from './components/feedback/ThankYou';
import { RatingProvider, useRating } from './RatingContext';
import SomeOtherComponent from './SomeOtherComponent';

function App() {
  return (
    <div className="App">
      <main>
        <RatingProvider>
          <Feedback />
        </RatingProvider>
      </main>
    </div>
  );
}

// Feedback component exists in order to wrap both the Rating and the ThankYou component in RatingProvider. Alternatively, App component could have been wrapped
// in RatingProvider in index.js.
const Feedback = () => {
  const rating = useRating();

  return (
    <div>
      {
        rating[0].submitted ?
          <Fragment>
            <ThankYou />
            <SomeOtherComponent />
          </Fragment> :
          <Rating />
      }
    </div>
  );
}

export default App;
