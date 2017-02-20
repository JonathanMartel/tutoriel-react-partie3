import React from 'react';
import ReactDOM from 'react-dom';


export default class App extends React.Component {
	
	constructor (props){
		super(props);
		console.log(props);
		this.state = {message : props.nom};
		this.clic =this.clic.bind(this);
	}
	
	clic(){
		console.log("clic");
		console.log(this);
		this.setState({message : "allo le monde"});
	}
	
	render(){
		return (<h1 onClick={this.clic}>{this.state.message}</h1>);
	}
}