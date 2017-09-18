import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component{
	constructor(props){
		super(props);
		this.state = { term: '' };
	}

	onInputChange(e){
		this.setState({ term: e.target.value });
	}

	onFormSubmit(e){
		e.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render(){
		return(
			<div>
				<form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
					<input 
						className="form-control"
						placeholder="Get a five-day forecast in your favourite cities."
						value={this.state.term}
						onChange={ this.onInputChange.bind(this) } />
					<span className="input-group-btn">
						<button type="submit" className="btn btn-secondary">Search</button>	
					</span>
				</form>
			</div>
		);
	}
}

export default connect(null, {fetchWeather})(SearchBar);