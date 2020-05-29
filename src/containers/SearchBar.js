import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
	constructor (props) {
		super(props);

		this.state = { term: '' };
	}

	onInputChange (event) {
		this.setState({ term: event.target.value });
	}

	onSubmitHandler (event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({ term: '' });
	}

	render () {
		return (
			<form onSubmit={this.onSubmitHandler.bind(this)} className="input-group">
				<input
					className="form-control"
					placeholder="Get a five-day forecast in your favorite cities"
					onChange={this.onInputChange.bind(this)}
					value={this.state.term}
					type="text"
				/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
		);
	}
}

const mapStateToProps = (state) => {
	return {};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
