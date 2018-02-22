import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../actions/action_recipe_modal';
import { addRecipe, editRecipe } from '../actions/action_recipe_list';
import { Button, Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class RecipeModal extends Component {
  onFooterButtonClick = () => {
    const name = ReactDOM.findDOMNode(this.refs.recipeNameInput).value;
    const ingredients = ReactDOM.findDOMNode(this.refs.recipeIngredientsInput).value.split(',');

    if (this.props.modalType === 'addRecipeModal') {
      this.props.closeModal();
      return this.props.addRecipe({ name, ingredients });
    }

    if (this.props.modalType === 'editRecipeModal') {
      this.props.closeModal();
      return this.props.editRecipe({
        id: this.props.modalProps.id,
        name,
        ingredients
      });
    }

  }

  render() {
    return (
      <div>
        <Button className="btn btn-primary btn-fab btn-fab-mini btn-round add-recipe-button"
                onClick={() => this.props.openModal('addRecipeModal', null) }>
          <i className="material-icons">add</i>
        </Button>

        <Modal show={ this.props.showModal } onHide={ this.props.closeModal }>
          <Modal.Header closeButton>
            <Modal.Title>
              {
                this.props.modalType === 'addRecipeModal' ?
                'Add a Recipe' :
                'Edit Recipe'
              }
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <ControlLabel>Recipe Name</ControlLabel>
                <FormControl
                  type="text"
                  ref="recipeNameInput"
                  placeholder="Add a Recipe"
                  defaultValue={ this.props.modalProps ? this.props.modalProps.name : '' }
                />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Ingregdients</ControlLabel>
                <FormControl
                  componentClass="textarea"
                  ref="recipeIngredientsInput"
                  placeholder="Enter,Ingredients,Separated,ByCommas"
                  defaultValue={ this.props.modalProps ? this.props.modalProps.ingredients.join(',') : '' }
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={ this.props.closeModal }>Close</Button>
            <Button bsStyle="primary" onClick={ this.onFooterButtonClick }>
              {
                this.props.modalType === 'addRecipeModal' ?
                'Add Recipe' :
                'Edit Recipe'
              }
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.showModal,
    modalType: state.modal.modalType,
    modalProps: state.modal.modalProps
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ openModal, closeModal, addRecipe, editRecipe }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeModal);