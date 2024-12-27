import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducers";

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import { useDispatch } from "react-redux";
// import rootReducer from "./rootReducer";

// import { persistReducer, persistStore } from "redux-persist";

// import storage from "redux-persist/lib/storage";
// import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// const createNoopStorage = () => {
//   return {
//     getItem(_key) {
//       return Promise.resolve(null);
//     },
//     setItem(_key, value) {
//       return Promise.resolve(value);
//     },
//     removeItem(_key) {
//       return Promise.resolve();
//     },
//   };
// };

// const isServer = typeof window === "undefined";
// // const persistStorage = isServer ? createNoopStorage() : storage;

// const persistConfig = {
//   key: "root",
//   storage:
//     typeof window !== "undefined"
//       ? createWebStorage("local")
//       : createNoopStorage(), // storage mechanism (localStorage)
//   whitelist: ["message", "setting", "persona"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [
//           "persist/PERSIST",
//           "persist/REHYDRATE",
//           "persist/REGISTER",
//         ],
//       },
//     }),
// });
// const persistor = persistStore(store);
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch: () => AppDispatch = useDispatch;
// export default store;
