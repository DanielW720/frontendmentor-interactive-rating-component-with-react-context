import Card from '../UI/Card';
import classes from './Rating.module.css';
import iconstar from "../../images/icon-star.svg";
import Button from '../utilities/Button';

const Rating = () => {
    return (
        <Card className={`${classes.rating}`}>
            <img src={iconstar} arg="" className={classes["icon-star"]} />
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <div className={classes["rating-button-group"]}>
                <Button className={classes["rating-button"]}>1</Button>
                <Button className={classes["rating-button"]}>2</Button>
                <Button className={classes["rating-button"]}>3</Button>
                <Button className={classes["rating-button"]}>4</Button>
                <Button className={classes["rating-button"]}>5</Button>
            </div>
            <Button className={classes["submit-button"]}>Submit</Button>
        </Card>
    );
}

export default Rating;
