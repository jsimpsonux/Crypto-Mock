import { createContext, useReducer } from "react";

//set up an initial state which wallet page will use when page loads
const initialState = {
  funds: 2000,
  investments: [
    { id: 79797, coin: "Bitcoin", img: "🍎", cost: 56 },
    { id: 23357, coin: "Ethereum", img: "🥝", cost: 36 },
    { id: 65497, coin: "Solana", img: "🌸", cost: 67 },
  ],
};

//WalletPageReducer, this reducer function is in charge of creating new state obj based on actions it receives,
//It takes in 2 args: the current global "state" (passed in by React) and "action" which passed in by dispatch
const WalletPageReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//create context is used to get the state and export it
export const WalletPageContext = createContext();

//To help you separate the concerns (rendering and state management) we need to use the hook useReducer()

//Create provider function to set context, that wraps the  components to pass certains states to
//WalletPageProvider holds the state and passes it to our components

export const WalletPageProvider = (props) => {
  // we need useReducer hook to hold states and track them. It accepts 2 arguments: the reducer function and the initial state
  const [state, dispatch] = useReducer(WalletPageReducer, initialState);

  // useReducer returns an array with exactly two items:
  // The current state of this state variable, initially set to the initial state you provided.
  // The dispatch function that lets you update the state to a different value and trigger a re-render.

  return (
    <WalletPageContext.Provider
      values={{
        funds: state.funds,
        investments: state.investments,
        dispatch,
      }}
    >
      {" "}
      {props.children}
    </WalletPageContext.Provider>
  );
};
