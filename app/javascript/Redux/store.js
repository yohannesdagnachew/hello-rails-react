import { configureStore } from "@reduxjs/toolkit";
import messages from "./reducer";

const store = configureStore({
  reducer: {
    messages,
  },
});

export default store;