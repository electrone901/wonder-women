import React from 'react';
import {Link} from 'react-router';

const WelcomePage = React.createClass({
	render(){
		return(
			<div>
			  <img style={backgroundImg}  src="http://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/14/2016/04/free-nyc-700x430.jpg" />
				<center>
				<header>
        <div class="container">
        	<div class="intro-text">
						<div class="row">
            	<div class="col-lg-12">
              	<div class="intro-message">
                	<center><h1 style={title}>Welcome To The Spotify NYC Technology</h1><br/>
                	<h2 style={title2}>Fellowship Program Challenge</h2><br/></center>
                       <Link to="/people"><input style={button1} type="button" value="Explore"/></Link>
                       <Link to="/people"><input style={button1} type="button" value="Get Instructions"/></Link>

                   </div>
               </div>
           </div>

            </div>
        </div>
    </header>
    </center>
	</div>
			)
	}
})


var title = {
  marginTop: "-480px",
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "55px",
  color: "#32ff04",
  textTransform: "uppercase",
  backgroundColor: "rgba(0, 0, 0, 0.22)",
}
var title2 = {
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "50px",
  color: "#32ff04",
  textTransform: "uppercase",
  marginTop: "-11px",
  backgroundColor: "rgb(172, 172, 179)",
}


var button1 = {
  fontFamily: "Roboto", 
 	width: "200px",
 	height: "40px",
  fontSize: "18px",
  lineHeight: "1.3333333",
  borderRadius: "6px",
  backgroundColor: "#fff",
  borderColor: "#ccc"
}

var backgroundImg = {
  width: "100%",
  height: "800px",
  marginTop: "-17px",
  backgroundAttachment: "fixed",
}



export default WelcomePage