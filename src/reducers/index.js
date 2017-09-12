// jshint ignore: start
import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipe_list';
import ModalReducer from './reducer_recipe_modal';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	modal: ModalReducer
});

export default rootReducer;
