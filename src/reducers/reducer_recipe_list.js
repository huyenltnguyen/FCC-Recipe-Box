// jshint ignore: start
import * as types from '../actions/actionTypes';

const defaultRecipeList = [
	{ 
		id: 0,
		name: 'Pumpkin Pie',
		ingredients: ['Pumpkin Puree', 'Sweetened Condensed Milk', 'Eggs', 'Pumpkin Pie Spice', 'Pie Crust']
	},

	{ 
		id: 1,
		name: 'Spaghetti',
		ingredients: ['Noodles', 'Tomato Sauce', '(Optional) Meatballs']
	},

	{
		id: 2,
		name: 'Onion Pie',
		ingredients: ['Onion', 'Pie Crust', 'Sounds Yummy right?']
	}		
];

export default function(state = defaultRecipeList, action) {
	switch(action.type) {
		case types.ADD_RECIPE:			
			return [...state, action.payload];
		case types.EDIT_RECIPE:
			let targetRecipe = state.filter((recipe) => recipe.id === action.payload.id)[0];
			let targetRecipeIndex = state.indexOf(targetRecipe);

			if (targetRecipe.name === action.payload.name && targetRecipe.ingredients.join(',') === action.payload.ingredients.join(',')) {
				return state;
			} else {
				let newState = [...state];
				newState.splice(targetRecipeIndex, 1, action.payload);
				return newState;
			}
		case types.DELETE_RECIPE:
			return state.filter((recipe) => recipe.name !== action.payload.name);
		default:
			return state;
	}		
}