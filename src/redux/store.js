import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducers";

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
