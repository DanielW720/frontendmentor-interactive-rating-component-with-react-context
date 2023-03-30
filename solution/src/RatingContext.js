import { createContext, useContext, useReducer } from "react";

// Create the two contexts
const RatingContext = createContext(null);
const RatingDispatchContext = createContext(null);

// Custom hook for using RatingContext
export function useRating() {
    return useContext(RatingContext);
}

// Custom hook for using RatingDispatchContext
export function useRatingDispatch() {
    return useContext(RatingDispatchContext);
}

// Component to wrap other child components in. The Provider component utilizes useReducer, and
// then provide all its children with the state (rating) and the dispatch function
export function RatingProvider({ children }) {
    const [rating, dispatch] = useReducer(ratingReducer, [{ rating: null, submitted: false }]);

    return (
        <RatingContext.Provider value={rating}>
            <RatingDispatchContext.Provider value={dispatch}>
                {children}
            </RatingDispatchContext.Provider>
        </RatingContext.Provider>
    );
}

// This function will be use as the dispatch function
export function ratingReducer(ratingState, action) {
    switch (action.type) {
        case 'chose-rating': {
            return [{ rating: action.rating, submitted: false }]
        }
        case 'reset': {
            return [{ rating: null, submitted: false }];
        }
        case 'increase': {
            return [{ rating: ratingState + 1, submitted: false }];
        }
        case 'submitted': {
            return [{ rating: ratingState[0].rating, submitted: true }]
        }
        default: {
            throw Error('Unkown action: ' + action.type);
        }
    }
}
