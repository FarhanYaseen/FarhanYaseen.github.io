import React, { Component } from 'react';

class Project extends Component {
	constructor(props) {
		super(props);
		this.renderJobDescription = this.renderJobDescription.bind(this);
		this.renderToolsAndTech = this.renderToolsAndTech.bind(this);
	}
	renderJobDescription() {
		let resultsArray = [];
		const description = this.props.item.description;
		for (let i in description) {
			resultsArray.push(<li key={i}>{description[i]}</li>);
		}
		return resultsArray;
	}
	renderToolsAndTech() {
		const techs = this.props.item.techs;
		return techs.join(", ");

		// for (let i in techs) {
		// 	resultsArray.push(<li key={i}>{techs[i]}</li>);
		// }
		// console.log('resultsArray', resultsArray);
		return techs;
	}
	render() {
		return (
			<div className="item">
				<span className="project-title">
					<a href={this.props.item.url}>{this.props.item.name}</a>
				</span> - <span className="project-tagline">{this.props.item.detail}</span>
				<div>
					<h5>Tools and Technologies</h5>
					<span>
						{this.renderToolsAndTech()}
					</span>
					<ul>
						{this.renderJobDescription()}
					</ul>
				</div>
			</div>
		);
	}
}

export default Project;