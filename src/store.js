import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
 
const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)
 
let store = createStore(
      persistedReducer,
      composeWithDevTools(
        applyMiddleware(
            thunk
            ))
      );
let persistor = persistStore(store);
  

export { store, persistor };


// export 
//     const store = createStore(
//     rootReducer,
//     composeWithDevTools(
//         applyMiddleware(
//             thunk
//     ))
// );