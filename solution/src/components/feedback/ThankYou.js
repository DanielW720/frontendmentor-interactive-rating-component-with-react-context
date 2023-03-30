import Card from '../UI/Card';
import classes from './ThankYou.module.css';
import illustrationThankYou from "../../images/illustration-thank-you.svg";
import { useRating, useRatingDispatch } from '../../RatingContext';

const ThankYou = () => {
    const rating = useRating();
    const dispatch = useRatingDispatch();

    return (
        // Click anywhere on this card to reset state
        <div onClick={() => dispatch({ type: 'reset' })}>
            <Card className={`${classes.thankyou}`} >
                <img src={illustrationThankYou} alt="Thank you" />
                <div className={classes.youselected}>You selected {rating[0].rating} out of 5</div>
                <h1>Thank you!</h1>
                <p>
                    We appreciate you taking the time to give a rating.
                </p>
                <p>
                    If you ever need more support,
                    don’t hesitate to get in touch!
                </p>
            </Card>
        </div>
    );
}

export default ThankYou;
