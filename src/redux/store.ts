import { configureStore } from "@reduxjs/toolkit";
import { exampleApi } from "./api/exampleApi";
import exampleReducer from "./slices/exampleSlice";



const store = configureStore({
   reducer: {
      example: exampleReducer,
      [exampleApi.reducerPath]: exampleApi.reducer, 
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(exampleApi.middleware, exampleApi.middleware),
});

export default store;

// need to work with hooks
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;