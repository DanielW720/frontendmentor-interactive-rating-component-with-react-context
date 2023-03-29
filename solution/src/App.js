import './App.css';
import { useState, useReducer } from 'react';
import Rating from './components/feedback/Rating';
import ThankYou from './components/feedback/ThankYou';

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
  // const [rating, setRating] = useState('');
  const [rating, dispatch] = useReducer(ratingReducer, 0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // const ratingHandler = (chosenRating) => {
  //   setRating(chosenRating);
  // }

  const submitHandler = () => {
    if (Number.isInteger(rating)) {
      setIsSubmitted(true);
    } else {
      console.log("Please choose a rating before submitting!" + rating);
    }
  }

  // const reset = () => {
  //   setRating('');
  //   setIsSubmitted(false);
  // }

  const ratingHandler = (chosenRating) => {
    dispatch({
      type: 'chose-rating',
      rating: chosenRating
    });
  }

  // const submitHandler = () => {
  //   if (Number.isInteger(rating)) {
  //     dispatch({
  //       type: 'submitted',
  //     });
  //   } else {
  //     // TODO: Present this to user
  //     console.log("Please choose a rating before submitting!")
  //   }
  // }

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
            <ThankYou rating={rating} onReset={reset} /> :
            <Rating ratingHandler={ratingHandler} submitHandler={submitHandler} />
        }
      </main>
    </div>
  );
}

export default App;
