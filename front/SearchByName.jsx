import React from 'react';
import $ from 'jquery';
import {Link} from 'react-router'

const SearchByName = React.createClass({
  getInitialState(){
    return {searchResult:[]}
  },
  submitSearch: function (e) {
    $.ajax({
		  url: "/api/people/search/" + this.state.searchResult,
		  method:'GET'
	})
	.done((data)=>this.setState({searchResult:data}))
  },

	handleChange: function(e) {
	this.setState({searchResult: e.currentTarget.value})
  },

  render(){
    return(
    <div>
      <center>
        <form>
          <input style={searchBar} placeholder="Quick Search" onChange={this.handleChange}/><br/>

 

          <Link to={'/game-results'}><input type="button" value="Search"/></Link>
        </form>

        <div className='middle'>
          {this.state.searchResult.map((ele,i)=>{
          return <table key={i}>
            <tbody>
                <tr>
                  <td style={tableData}>Id: {ele.id}</td>
                  <td style={tableData}>Name: {ele.name}</td>
                  <td style={tableData}>City: {ele.favoriteCity}</td>

                  <td><Link to={'/update-info/' + ele.id}><button>Update</button></Link></td>

                  <td><Link to={'/delete-user/' + ele.id}><button>Delete</button></Link></td>
                </tr>
              </tbody> 
          </table>
          })}
        </div>
        <div className="searchEmpty-container"></div>
      </center>
    </div>
    )
  }
})

var tableData = {
  width: "250px",
  height: "20px",
  padding: "10px",
}

var searchBar = {
  width: "250px",
  fontFamily: "neutra-book",
  width: "325px",
  marginBottom: "3px",
  borderRadius: "32px",
  paddingLeft: "15px",
  outline: "0",
  height: "48px",
  fontWeight: "600",
  fontSize: "25px",
  transition: "all 250ms ease-out",
}

export default SearchByName;