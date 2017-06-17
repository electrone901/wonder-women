
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
    console.log('data:', this.state.persons)
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
                  <td><img style={imgProfile} src={ele.image}/></td>
                  <td style={tableData}>{ele.id}</td>
                  <td style={tableData}>{


                    
                    ele.name}</td>
                  <td style={tableData}>{ele.favoriteCity}</td>

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

var imgProfile = {
  height: "181px",
}
export default Persons;

