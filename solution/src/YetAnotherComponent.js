import { React } from "react";
import { useRating, useRatingDispatch } from "./RatingContext"

const YetAnotherCompoent = () => {
    const rating = useRating();
    const dispatch = useRatingDispatch();

    return (
        <div style={
            {
                "display": "flex",
                "flexDirection": "column"
            }
        }>
            <p style={
                {
                    "color": "hotPink"
                }
            }>
                {`Here we are in YetAnotherComponent, and even though we're
                way below the App component and don't use any props, we know that
                the rating is ${rating[0].rating}!`}
            </p>
            <button
                onClick={() => dispatch({ type: 'increase' })}
                style={
                    {
                        "color": "var(--verydarkblue)",
                        "fontWeight": "400",
                        "backgroundColor": "hotPink",
                        "border": "0",
                        "borderRadius": "0.6rem",
                        "padding": "0.6rem",
                        "cursor": "pointer",
                        "width": "fit-content",
                        "alignSelf": "center"
                    }
                }>
                I will increase the rating!
            </button>
        </div>
    )
}

export default YetAnotherCompoent;