import { createStore, combineReducers, applyMiddleware } from 'redux';
import homeStore from './home/store';
import filmStore from './film/store';
import bookStore from './book/store';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  homeStore,
  filmStore,
  bookStore
})

const store = createStore(reducer, applyMiddleware(thunk));

export default store