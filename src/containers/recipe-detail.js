import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeDetail extends Component {
	render() {
		if (!this.props.recipe) {
			return <div></div> 
		}

		return (			
		    <ul className="list-group">	      
	      	{ this.props.recipe.ingredients.map((ingredient) => {
	      		return (
	      			<li key={ ingredient } className="list-group-item">{ ingredient }</li>
	      		)
	      	})
	      }
	      </ul>
		)
	}
}

function mapStateToProps(state) {
	return {
		recipe: state.activeRecipe
	}
}

export default connect(mapStateToProps)(RecipeDetail);