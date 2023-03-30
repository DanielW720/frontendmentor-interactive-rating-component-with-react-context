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
