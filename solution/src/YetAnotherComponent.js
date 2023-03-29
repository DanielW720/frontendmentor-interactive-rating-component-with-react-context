import { useContext } from "react"
import { RatingContext } from "./RatingContext"

const YetAnotherCompoent = () => {
    const rating = useContext(RatingContext);

    return (
        <p style={
            {
                "color": "pink",
                "fontWeight": "lighter"
            }
        }>
            {`Here we are in YetAnotherComponent, and even though we're
            way below the App component and don't use any props, we know that
            the rating is ${rating[0].rating}!`}
        </p>
    )
}

export default YetAnotherCompoent;