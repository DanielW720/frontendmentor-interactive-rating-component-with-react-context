import './App.css';
import { useState } from 'react';
import Rating from './components/feedback/Rating';
import ThankYou from './components/feedback/ThankYou';

function App() {
  const [rating, setRating] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ratingHandler = (chosenRating) => {
    setRating(chosenRating);
  }

  const submitHandler = () => {
    if (Number.isInteger(rating)) {
      setIsSubmitted(true);
    } else {
      console.log("Please choose a rating before submitting!")
    }
  }

  const reset = () => {
    setRating('');
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
