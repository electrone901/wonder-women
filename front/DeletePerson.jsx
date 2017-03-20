import React from 'react';
import {Link} from 'react-router';
var $ = require('jquery');


var DeletePerson = React.createClass({
 getInitialState() {
    return ({persons: []})
  },

componentDidMount: function () {
    $.ajax({
      url: "/api/people/"+ this.props.params.personId,
      method: 'DELETE',
    })
    .done((data)=>this.setState({persons:data}))
  },
  
  render() {

    return (
      <div className="container">
	      <h1>This User has been Delete!</h1>
	      <Link to={'/people'}><button>Return Home</button></Link>
      </div>
    )
  }
})

export default DeletePerson;

