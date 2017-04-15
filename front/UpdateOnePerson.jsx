import React from 'react';
var $ = require('jquery');
import {Link, browserHistory} from 'react-router';

var UpdateOnePerson = React.createClass({
  getInitialState() {
    return ({person1: null})
  },

  componentDidMount: function () {
    $.ajax({
      url: "/api/people/"+ this.props.params.personId,
      method: 'GET'
    })
    .done((data)=>this.setState({person1:data}))
  },
  handleChange(inputField, e) {
    this.setState({[inputField]: e.target.value})
  },

  //IF YOU HAVE TIME IMPLEMENT SEE CHANGES SAME PAGE
  submitUpdate() {
    $.ajax({
      url: '../api/people/' + this.state.person1.id,
      type: 'PUT',
      data: {
        name: this.state.name,
        favoriteCity: this.state.favoriteCity
      }
    })
    browserHistory.push('successfuly-updated/'+ this.state.person1.id);
  },

  
  render() {
    console.log('favoriteCity', this.state.person1 ?  this.state.person1.favoriteCity: 'NO DATA')
    return (
      <div className="container">
        <center>
  	      <h1>Update Person's Information</h1>
  	      <form>
             Edit Name:          <br/>
            <textarea onChange={this.handleChange.bind(this, 'name')}>
                {this.props.person1} 
            </textarea><br/><br/>

              Edit Favorite City:        <br/>
            <textarea onChange={this.handleChange.bind(this, 'favoriteCity')}type="text" name="favoriteCity">

                {this.props.person1} 
            </textarea><br/><br/>


            <Link to="/people"><input type="button" value="Cancel"/></Link>

            <input onClick={this.submitUpdate} type="button" value="SAVE" />
         </form>
        </center>  
      </div>
    )
  }
})

export default UpdateOnePerson;

