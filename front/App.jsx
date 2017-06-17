import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Navbar from './Navbar'
import WelcomePage from './WelcomePage';
import Persons from './Persons';
import UpdateOnePerson from './UpdateOnePerson';
import DeletePerson from './DeletePerson';
import SuccessfullyUpdated from './SuccessfullyUpdated';
import CreatePerson from './CreatePerson';
import SearchByName from './SearchByName';
import GetOnePersonById from './GetOnePersonById';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';

const App = React.createClass({
	render(){
		return(
			<div>
			<Navbar />
			{this.props.children}
			</div>
			)
	}
})

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={WelcomePage} />
      <Route path="people" component={Persons} /> 
      <Route path="update-info/:personId" component={UpdateOnePerson} /> 
      <Route path="delete-user/:personId" component={DeletePerson} /> 
      <Route path="successfuly-updated/:personId" component={SuccessfullyUpdated} /> 
      <Route path="search-by-name" component={SearchByName} /> 
      <Route path="add-new-person" component={CreatePerson} /> 
      <Route path="search-by-id" component={GetOnePersonById} /> 
      <Route path="projects" component={ProjectList} /> 
      <Route path="/projects/:projectId" component={ProjectDetails} /> 
    </Route>
  </Router>,
	document.getElementById('app')
	)