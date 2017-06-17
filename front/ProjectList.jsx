import React from 'react';
var $ = require('jquery');
import {Link} from 'react-router';



var ProjectList = React.createClass({
 getInitialState() {
    return ({projects: []})
  },

componentDidMount: function () {
  $.ajax({
      url: "/api/projects",
      method: 'GET',
    })
    .done((data)=>this.setState({projects:data}))
  },
  render() {
    console.log('data:', this.state.projects)
    return (
      <div className="container">
        {this.state.projects.map((ele,i)=>{
          return <div>
            <table key={i}>
              <tbody>
                  <tr>
                    <td style={tableData}>Project Name: {ele.projectName}</td>
                    <td style={tableData}>Technologies: {ele.techStack}</td>

                      <Link to={'/projects/'+ ele.id}><h3>{ele.projectName}</h3></Link>
                      <Link to={'/projects/'+ ele.id}><h3>{ele.id}</h3></Link>

                    

                   {/* <td><Link to={'/update-info/' + ele.id}><button>Update</button></Link></td>

                    <td><Link to={'/delete-user/' + ele.id}><button>Delete</button></Link></td>
                    */}

                  </tr>
                </tbody> 
            </table>
          </div>

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
export default ProjectList;

