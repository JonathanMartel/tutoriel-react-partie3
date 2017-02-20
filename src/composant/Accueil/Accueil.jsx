import React from 'react';
import ReactDOM from 'react-dom';
import Entete from "../Entete/Entete.jsx";

export default class Accueil extends React.Component {
	
	constructor (props){
		super(props);
		
	}
	
	render(){
		return (			
				<section>
					<Entete />
					<h1>Accueil</h1>
					<p>Lorem ipsum</p>
					<p>Lorem ipsum</p>
					<p>Lorem ipsum</p>
				</section>);
	}
}