import * as types from './actionTypes';

export function selectRecipe(recipe) {
	return {
		type: types.RECIPE_SELECTED,
		payload: recipe
	};
}

export function addRecipe(recipe) {
	return {
		type: types.RECIPE_ADDED,
		payload: recipe
	}
}