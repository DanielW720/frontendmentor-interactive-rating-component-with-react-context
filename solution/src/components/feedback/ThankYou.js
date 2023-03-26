import Card from '../UI/Card';
import classes from './ThankYou.module.css';
import illustrationThankYou from "../../images/illustration-thank-you.svg";
import Button from '../utilities/Button';

const ThankYou = props => {
    return (
        <div onClick={props.onReset}>
            <Card className={`${classes.thankyou}`} >
                <img src={illustrationThankYou} />
                <div className={classes.youselected}>You selected {props.rating} out of 5</div>
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
