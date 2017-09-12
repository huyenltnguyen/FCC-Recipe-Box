import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../actions/index.js';

class AddRecipeButton extends Component {

	

	render() {
		let newRecipe = {};

		return (
			<div className="container">
				<div className="col-sm-4">
					<button type="button"
									className="btn btn-intro"
									data-toggle="modal"
									data-target="#addRecipeModal">
									Add Recipe
					</button>

					<div className="modal fade" id="addRecipeModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
						<div className="modal-dialog">
							<div className="modal-content">

									<div className="modal-header">
										<button type="button" className="close" data-dismiss="modal">
											<span aria-hidden="true">&times;</span>
											<span className="sr-only">Close</span>
										</button>

										<h4 className="modal-title" id="myModalLabel">
											Add a Recipe
										</h4>
									</div>				            
									
									<div className="modal-body">				                
										<form role="form">
											<div className="form-group">
				                <label htmlFor="recipeName">Name</label>
                				<input type="text" className="form-control" id="recipeName" placeholder="Recipe Name"onChange={ (event) => {
                					newRecipe.name = event.target.value;	                					
                				}}/>
            					</div>
				              <div className="form-group">
				                <label htmlFor="recipeIngredients">Ingredients</label>
				                <textarea className="form-control" rows="2" id="recipeIngredients" placeholder="Enter ingredients,Separated,By commas" onChange={ (event) => {
				                	newRecipe.ingredients = event.target.value.split(',');
				                } }></textarea>
				              </div>				              
										</form>     
									</div>

									<div className="modal-footer">
										<button type="button" className="btn btn-default"	data-dismiss="modal">
											Close
										</button>
										<button type="button" className="btn btn-primary" onClick={ () => this.props.addRecipe(newRecipe) }>
											Add recipe
										</button>
									</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({addRecipe}, dispatch);
}

export default connect(null, mapDispatchToProps)(AddRecipeButton);