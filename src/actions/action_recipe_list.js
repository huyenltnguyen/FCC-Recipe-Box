// jshint ignore: start
import * as types from './actionTypes';
import shortid from 'shortid';

export function addRecipe(recipe) {
	return {
		type: types.ADD_RECIPE,
		payload: {
			id: shortid.generate(),
			name: recipe.name,
			ingredients: recipe.ingredients
		}
	};
}

export function editRecipe(recipe) {
	return {
		type: types.EDIT_RECIPE,
		payload: recipe
	};
}

export function deleteRecipe(recipe) {
	return {
		type: types.DELETE_RECIPE,
		payload: recipe
	};
}