import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeDetail extends Component {
	render() {
		if (!this.props.recipe) {
			return <div>Select a recipe to get started.</div>
		}

		return (
			<div>
				<h3>Details for:</h3>
				<div>Name: { this.props.recipe.name }</div>
				<div>Ingredients: { this.props.recipe.ingredients.map((ingredient) => <li key={ ingredient }>{ ingredient }</li> ) }</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.activeRecipe
	}
}

export default connect(mapStateToProps)(RecipeDetail);