import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
	renderList() {
		return this.props.recipes.map((recipe) => {
			return (
				<li
					key={ recipe.name }
					onClick={() => this.props.selectRecipe(recipe) }
					className="list-group-item">
					{ recipe.name }
				</li>
			);
		});
	}
	render () {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderList() }
			</ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes 
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectRecipe: selectRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);