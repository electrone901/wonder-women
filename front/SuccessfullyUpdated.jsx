
import React from 'react';
var $ = require('jquery');
import {Link} from 'react-router';

var SuccessfullyUpdated = React.createClass({
 getInitialState() {
    return ({persons: null})
  },

componentDidMount: function () {
    $.ajax({
      url: "../api/people/"+ this.props.params.personId,
      method: 'GET',
    })
    .done((data)=>this.setState({persons:data}))
  },
  
  render() {
    console.log('SUCCESFUL GETTING ID?', this.state.persons)
    console.log('SUCCESFUL GETTING ID?', this.state.persons ?  this.state.persons: 'NO DATA')

    return (
      <div className="container">
	      <h1>This User has been Successfuly Updated! Here is the new changes. </h1>
        
        <Link to="/people"><input type="button" value="Return home"/></Link>
      </div>
    )
  }
})

export default SuccessfullyUpdated;


// {this.state.persons.map((ele,i)=>{
//           return <li key={i}>
//                   <p>{ele.id}</p>
//                   <p>{ele.name}</p>
//                   <p>{ele.favoriteCity}</p>
//           </li>
//         })}

