import Card from '../UI/Card';
import classes from './Rating.module.css';
import iconstar from "../../images/icon-star.svg";
import Button from '../utilities/Button';
import { useRatingDispatch } from '../../RatingContext';

const Rating = () => {
    const dispatch = useRatingDispatch();

    return (
        <Card className={`${classes.rating}`}>
            <img src={iconstar} alt="A star" className={classes["icon-star"]} />
            <h1>How did we do?</h1>
            <p>
                Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!
            </p>
            <div className={classes["rating-button-group"]}>
                {
                    [1, 2, 3, 4, 5].map(rating =>
                        <Button
                            key={rating}
                            className={classes["rating-button"]}
                            onClick={(rating) => dispatch({
                                type: 'chose-rating',
                                rating: rating
                            })}>
                            {rating}
                        </Button>
                    )
                }
            </div>
            <Button
                className={classes["submit-button"]}
                onClick={(_) => dispatch({ type: 'submitted' })}>
                Submit
            </Button>
        </Card>
    );
}

export default Rating;
