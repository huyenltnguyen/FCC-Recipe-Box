// jshint ignore: start
import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import RecipeList from '../containers/RecipeList';
import RecipeModal from '../containers/RecipeModal';

export default class App extends Component {
	render() {
		return (
			<Grid className="App">
				<Row>
					<Col sm={4}>
						<RecipeList />
						<RecipeModal />
					</Col>
				</Row>
				
			</Grid>
		);
	}
}
