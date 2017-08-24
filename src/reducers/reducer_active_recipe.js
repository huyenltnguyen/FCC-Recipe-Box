import * as types from '../actions/actionTypes';

export default function(state = null, action) {
	switch(action.type) {
		case types.RECIPE_SELECTED:
			console.log(action.payload);
			return action.payload;
		default: 
			return state;
	}
}