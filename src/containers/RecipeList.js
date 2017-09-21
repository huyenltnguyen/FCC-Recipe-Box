// jshint ignore: start
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal } from '../actions/action_recipe_modal';
import { deleteRecipe } from '../actions/action_recipe_list';
import { Accordion, Panel, Button } from 'react-bootstrap';

class RecipeList extends Component {
	renderList() {
		return this.props.recipes.map((recipe) => {
			return (
				<Panel key={ recipe.id } header={ recipe.name } eventKey={ recipe.id }>
					<ul>
						{ recipe.ingredients.map((ingredient) => <li key={ ingredient }>{ingredient}</li>) }
					</ul>
					<Button className="btn-primary" onClick={() => this.props.openModal('editRecipeModal', recipe) }>Edit</Button>
					<Button bsStyle="danger" onClick={() => this.props.deleteRecipe(recipe) }>Delete</Button>
				</Panel>
			);
		});
		
	}

	render() {
		return (
			<Accordion className="RecipeList">				
					{ this.renderList() }				
			</Accordion>
		);
	}
}

function mapStateToProps(state) {
	return {
		recipes: state.recipes
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ openModal, deleteRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeList);