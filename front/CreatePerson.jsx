import React from 'react';
import $ from 'jquery';
import {Link, browserHistory} from 'react-router'

const CreatePerson = React.createClass({
	getInitialState(){
		return {
		  name: '',   
		  favoriteCity: ''
		}
	},
	handleChange(inputField, e){
		this.setState({[inputField] : e.target.value})
	},
	submitNewPerson() {
		$.ajax({
		  url:'/api/people',
		  type: 'POST',
		  data: {
		  	name: this.state.name,
		  	favoriteCity:this.state.favoriteCity
		  }

		})
          console.log('new Person was created')
          browserHistory.push('/people');
          browserHistory.push('/people');
	},
	render(){
		return(
		<div className="container">
           <h1>Add New User Form</h1>
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

             <input onClick={this.submitNewPerson} type="button" value="SAVE" />
         </form>

          

        
      </div>
			)
	}
})

export default CreatePerson;