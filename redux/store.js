import {combineReducers, configureStore} from "@reduxjs/toolkit"
import {persistReducer, persistStore} from "redux-persist"
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"

const rootReducer = combineReducers({})
const persistConfig = {
    key: 'root',
    storage,
    version: 1,
};

const persistReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware)=> {
        getDefaultMiddleware({
            serializableCheck: false,
        })
    }
});

export const persistor = persistStore(store);