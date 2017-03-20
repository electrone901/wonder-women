
import React from 'react';
var $ = require('jquery');
import {Link} from 'react-router';



var Persons = React.createClass({
 getInitialState() {
    return ({persons: []})
  },

componentDidMount: function () {
  $.ajax({
      url: "/api/people",
      method: 'GET',
    })
    .done((data)=>this.setState({persons:data}))
  },

  render() {
    return (
      <div className="container">
	      <h1 style={tableData1} >People List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
        </table>
	      {this.state.persons.map((ele,i)=>{
	        return <table key={i}>
              
              <tbody>
                <tr>
                  <td >{ele.id}</td>
                  <td className="tableData">{ele.name}</td>
                  <td className="tableData">{ele.favoriteCity}</td>

                  <td><Link to={'/update-info/' + ele.id}><button>Update</button></Link></td>
                  
                  <td><Link to={'/delete-user/' + ele.id}><button>Delete</button></Link></td>
                </tr>
              </tbody> 
          </table>
	      })}
      </div>
    )
  }
})
var tableData1 = {
  backgroundColor: "red",
}
export default Persons;

