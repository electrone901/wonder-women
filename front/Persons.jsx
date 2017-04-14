
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
	      <center><h1 style={title}>People List</h1></center>
        <table>
          <thead>
            <tr>
              <th style={tableData}>ID</th>
              <th style={tableData}>Name</th>
              <th style={tableData}>City</th>
              <th style={tableData}>Actions</th>
            </tr>
          </thead>
        </table>


	      {this.state.persons.map((ele,i)=>{
	        return <table key={i}>
              
              <tbody>
                <tr>
                  <td style={tableData}>{ele.id}</td>
                  <td style={tableData}>{ele.name}</td>
                  <td style={tableData}>{ele.favoriteCity}</td>

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
var title = {
  backgroundColor: "rgba(0, 255, 102, 0.88)",
}

var tableData = {
  width: "250px",
  height: "20px",
  padding: "10px",
}
export default Persons;

