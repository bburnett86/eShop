// Here we define all the application level states and define actions to make the state changes.
// Create data layer and get basic functionality.

export const initialState = {
    basket: [],
};

//Selector

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
	}
}

export default reducer;