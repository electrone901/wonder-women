// import React from 'react';
// var $ = require('jquery');
// import {Link} from 'react-router';

// const ProjectDetails = React.createClass({
//   getInitialState(){
//     return ({project: []})
//   },
//   componentDidMount: function () {
//   $.ajax({
//     url:'/api/projects/' + this.props.params.id,
//     method:'GET'
//   })
//   .done((data)=>{
//     console.log('inside',this.data)
//     this.setState({project:data})
//   })
// }, 
  
//   render() {
//   console.log('outside',this.data)
//   console.log('ARE YOU GETTING DATA',this.state.project)
//   return(
//     <div className="container">
//         U GETING IT?



//       </div>
//     )
//  }
// })

// export default ProjectDetails;

import React from 'react'
import $ from 'jquery'

const ProjectDetails = React.createClass({
  getInitialState(){
    return{
      playlist: null
    }
  },
  componentDidMount(){
    $.ajax({
      
      // url: '/api/projects/'+this.props.params.id,
      url: '/api/projects/1',
      method: 'GET'
    })
    .done((data)=>
      this.setState({playlist: data})
      )
  },
  
  render(){
    console.log('yyyyy: ',this.state.playlist)
    return(
      <div>
        hhhhhhhh
  </div>
      )
  }
})

export default ProjectDetails;








