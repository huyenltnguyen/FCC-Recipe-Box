import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeDetail from './recipe-detail';
import { selectRecipe } from '../actions/index';
import { bindActionCreators } from 'redux';

class RecipeList extends Component {
	renderList() {
		return this.props.recipes.map((recipe) => {
			
			const recipeId = recipe.name.match(/\S/g).join('');

			return (						 
			  <li  key={ recipe.name } className="panel panel-default" onClick={() => this.props.selectRecipe(recipe) }>
			    <div className="panel-heading">
			      <h4 className="panel-title">
			        <a data-toggle="collapse" data-parent="#accordion" href={ '#' + recipeId }>{ recipe.name }</a>
			      </h4>
			    </div>	    	

		    	<div id={ recipeId } className="panel-collapse collapse">
			    	<RecipeDetail />
		    	</div>					    					    
			  </li>
			);
		});
	}

	render () {
		return (
			<div className="container">
				<ul className="panel-group col-sm-4" id="accordion">
					{ this.renderList() }					
				</ul> 
			</div>
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