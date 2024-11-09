import { Children, createContext, useReducer } from "react";

export const CounterContext = createContext();
export const CounterProvider = ({ children }) => {
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        if (state.count < -2) {
          return {
            count: state.count + 1,
            color: "red",
          };
        } else {
          return {
            count: state.count + 1,
          };
        }
      case "decrement":
        if (state.count <= 0) {
          return {
            count: state.count - 1,
            color: "red",
          };
        } else {
          return {
            count: state.count - 1,
          };
        }
      case "reset":
        return {
          count: (state.count = 0),
        };
      case "increment_by":
        if (state.count < -10) {
          return {
            count: state.count + action.payload,
            color: "red",
          };
        } else {
          return {
            count: state.count + action.payload,
          };
        }
      case "decrement_by":
        if (state.count <= 4) {
          return {
            count: state.count - action.payload,
            color: "red",
          };
        } else {
          return {
            count: state.count - action.payload,
          };
        }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    color: "black",
  });
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
