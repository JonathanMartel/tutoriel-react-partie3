import React from 'react';
import ReactDOM from 'react-dom';
import s from './Entete.scss'; 
import {Link, hashHistory} from 'react-router';

export default class Entete extends React.Component {
	
	constructor (props){
		super(props);
	}
	
	render(){
		return (<header className="monEntete">
					<h1>Ceci est un titre</h1>
					<nav>
						<Link to="/" activeClassName="actif">Accueil</Link>
						<Link to="/commentaire" activeClassName="actif">Commentaires</Link>
					</nav>
				</header>);
	}
}