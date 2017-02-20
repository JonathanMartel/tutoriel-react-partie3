import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';

import Accueil from '../Accueil/Accueil.jsx';
import Commentaires from '../Commentaires/Commentaires.jsx';
import Entete from "../Entete/Entete.jsx";

export default class App extends React.Component {
	
	constructor (props){
		super(props);
		
	}
	
	render(){
		return (
			<section>
				<Router history={hashHistory}>
					<Route path="/" component={Accueil} />
					<Route path="/commentaire" component={Commentaires} />
					<Route path="*" component={Accueil} />
				</Router>
			</section>
		
		);
	}
}