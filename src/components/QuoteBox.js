import React, { Component } from 'react';

class QuoteBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			quote: []
		}
	}
	componentDidMount() {
		fetch("https://type.fit/api/quotes")	
			.then(res => {
				return res.json();
			}).then(data => {
				this.setState({
					quote: data[Math.floor(Math.random() * data.length)]
				});
			})
	}
	onClick = () => {
		fetch("https://type.fit/api/quotes")	
			.then(res => {
				return res.json();
			}).then(data => {
				this.setState({
					quote: data[Math.floor(Math.random() * data.length)]
				});
			})
	}
	render() {
		const { text, author } = this.state.quote;
		const tweetCard = `https://twitter.com/intent/tweet?text=${text} by ${author}`
		const isAuthor = author ? (
			<p id="author" className="subtitle">
				{author}
			</p>
		) : (
			<p id="author" className="subtitle">
				Author unknow
			</p>
		);
		const isText = text ? (
			<div id="quote-box" className="card">
				<div className="card-content">
					<p id="text" className="title">
						{text}
					</p>
						{isAuthor}
				</div>
				<div className="card-footer">
					<p className="card-footer-item">
						<span>Share on <a className="button is-info is-small" id="tweet-quote" href={tweetCard}> Twitter</a></span>
					</p>
					<p className="card-footer-item">
						<span>Get another <button className="button is-info is-small" id="new-quote" href="/#" onClick={this.onClick}>Quote</button> !</span>
					</p>
				</div>
			</div>
		) : (
			<div id="quote-box" className="card">
				<div className="card-content">
					<p id="text" className="title">
						Landing...
					</p>
				</div>
			</div>
		);
		return (
			<div>
				{isText}
			</div>
		);
	}
}

export default QuoteBox;
