import { push } from "connected-react-router";

export const signIn = () => (dispatch) => {
  return new Promise(resolve =>
    setTimeout(() => {
      console.log("Vamos lá!");
      dispatch(push("/profile"));
      
    }, 0)
  );
};