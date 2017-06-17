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
      url: '/api/projects/'+this.props.params.id,
      method: 'GET'
    })
    .done((data)=>
      this.setState({playlist: data})
      )
  },
  
  render(){
    console.log(this.state.playlist)
    return(
      this.state.playlist ? 
      (<div>
      <h1>Playlist Title: {this.state.playlist.title}</h1>
      
        {this.state.playlist.songs.map((song, index)=>
          <div key={index}>
            <h3>Title: {song.title}</h3>
            <h3>Artist: {song.artist.name}</h3>
            <h3>Genres: {song.genres.map((genre, index)=><p key={index}>{genre.title}</p>)}</h3>
            <h3>Creation Date: {song.createdAt}</h3>
            <iframe width="420" height="315"src={`${song.youtube_url.replace('watch?v=', 'embed/')}?origin=http://localhost:9999.com`}></iframe>
            <br/>
            <input type="button" value="-REMOVE SONG" onClick={this.deleteSongFromPlaylist.bind(this,song.title)}/>
          </div>
        )}
      </div>) 
      : <p>No Playlists!</p>
    )
  }
})

export default ProjectDetails;








