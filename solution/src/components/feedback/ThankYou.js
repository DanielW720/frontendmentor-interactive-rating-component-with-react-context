import Card from '../UI/Card';
import classes from './ThankYou.module.css';
import illustrationThankYou from "../../images/illustration-thank-you.svg";
import { useContext } from 'react';
import { RatingContext } from '../../RatingContext';


const ThankYou = ({ onReset }) => {
    const rating = useContext(RatingContext);
    const ratingValue = rating[0].rating;

    return (
        <div onClick={onReset}>
            <Card className={`${classes.thankyou}`} >
                <img src={illustrationThankYou} alt="Thank you" />
                <div className={classes.youselected}>You selected {ratingValue} out of 5</div>
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
