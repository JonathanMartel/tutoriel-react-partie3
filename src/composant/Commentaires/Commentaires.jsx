import React from 'react';
import ReactDOM from 'react-dom';
import Entete from "../Entete/Entete.jsx";

export default class Commentaires extends React.Component {
	
	constructor (props){
		super(props);
	}
	
	render(){
		return (<section>
					<Entete />
					<h1>Commentaires</h1>
					<p>Lorem ipsum</p>
				</section>);
	}
}