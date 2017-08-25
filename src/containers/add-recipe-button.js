import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addRecipe } from '../actions/index.js';

class AddRecipeButton extends Component {
	constructor(props) {
		super(props);

		this.state = { name: '', ingredients: [] }
		this.addRecipe = this.addRecipe.bind(this);
	}

	addRecipe() {
		//console.log("add recipe", this.state.text);
		this.props.addRecipe(this.state);
	}

	render() {
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
                				<input type="text" className="form-control" id="recipeName" placeholder="Recipe Name" onChange={ (event) => this.setState({ name: event.target.value }) }/>
            					</div>
				              <div className="form-group">
				                <label htmlFor="recipeIngredients">Ingredients</label>
				                <textarea className="form-control" rows="2" id="recipeIngredients" placeholder="Enter ingredients,Separated,By commas"></textarea>
				              </div>				              
										</form>     
									</div>

									<div className="modal-footer">
										<button type="button" className="btn btn-default"	data-dismiss="modal">
											Close
										</button>
										<button type="button" className="btn btn-primary" onClick={ this.addRecipe }>
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