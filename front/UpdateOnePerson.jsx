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

  submitUpdate() {
  	console.log('YAYY!')
  	console.log('GETTING ID?', this.state.person1)
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
  	console.log('info?', this.state.person1)
  	console.log('favoriteCity', this.state.person1 ?  this.state.person1.favoriteCity: 'NO DATA')

  	// console.log('info?', this.state.person1[id])
  	// console.log('name', this.state.person1[name])

    return (
      <div className="container">
	      <h1>Update Person's Information</h1>
	      <form>
         Edit Name:         <br/>
          <textarea onChange={this.handleChange.bind(this, 'name')}>
              {this.state.person1}
          </textarea><br/><br/>

          Edit Favorite City:        <br/>
          <textarea onChange={this.handleChange.bind(this, 'favoriteCity')}type="text" name="favoriteCity">
              {this.state.person1}
          </textarea><br/><br/>


           <Link to="/people"><input type="button" value="Cancel"/></Link>

             <input onClick={this.submitUpdate} type="button" value="SAVE" />
         </form>

	     

        
      </div>
    )
  }
})

export default UpdateOnePerson;

