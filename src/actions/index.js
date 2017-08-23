import * as types from './actionTypes';

export function selectRecipe(recipe) {
	return {
		type: types.RECIPE_SELECTED,
		payload: recipe
	};
}