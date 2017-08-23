import { combineReducers } from 'redux';
import RecipesReducer from './reducer_recipes';
import ActiveRecipe from './reducer_active_recipe';

const rootReducer = combineReducers({
	recipes: RecipesReducer,
	activeRecipe: ActiveRecipe
});

export default rootReducer;