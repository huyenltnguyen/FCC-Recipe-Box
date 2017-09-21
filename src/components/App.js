// jshint ignore: start
import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import RecipeList from '../containers/RecipeList';
import RecipeModal from '../containers/RecipeModal';

export default class App extends Component {
	render() {
		return (
			<div>
				<PageHeader>Recipe Box</PageHeader>			

				<Grid className="App">			
					<Row>					
						<Col md={6} mdOffset={3} sm={8} smOffset={2}>
							<RecipeList />
							<RecipeModal />
						</Col>
					</Row>
					
				</Grid>
			</div>
		);
	}
}
