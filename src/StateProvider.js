import React, {createContext, useContext, useReducer} from "react";

// prepares the data layer
export const StateContext = createContext();

//wr.ap our app and provide teh data layer with the data
export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

// pull information from the data layer
export const useStateValue = () => useContext(StateContext);