import './App.css';
import { useState, useReducer } from 'react';
import Rating from './components/feedback/Rating';
import ThankYou from './components/feedback/ThankYou';
import { RatingContext } from './RatingContext';
import SomeOtherComponent from './SomeOtherComponent';

function ratingReducer(ratingState, action) {
  switch (action.type) {
    case 'chose-rating': {
      return action.rating;
    }
    case 'reset': {
      return null;
    }
    default: {
      throw Error('Unkown action: ' + action.type);
    }
  }
}

function App() {
  const [rating, dispatch] = useReducer(ratingReducer, 0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitHandler = () => {
    if (Number.isInteger(rating)) {
      setIsSubmitted(true);
    } else {
      console.log("Please choose a rating before submitting!" + rating);
    }
  }

  const ratingHandler = (chosenRating) => {
    dispatch({
      type: 'chose-rating',
      rating: chosenRating
    });
  }

  const reset = () => {
    dispatch({
      type: 'reset'
    });
    setIsSubmitted(false);
  }

  return (
    <div className="App">
      <main>
        {
          isSubmitted ?
            <RatingContext.Provider value={[{ rating: rating }]}>
              {/* Provider: If any component inside this <ThankYou> asks for RatingContext, give 
              them this rating. */}
              <ThankYou onReset={reset} />
              <SomeOtherComponent />
            </RatingContext.Provider> :
            <Rating ratingHandler={ratingHandler} submitHandler={submitHandler} />
        }
      </main>
    </div>
  );
}

export default App;
