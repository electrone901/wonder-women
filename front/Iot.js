import React from 'react';
import {Link} from 'react-router';
import SearchByName from './SearchByName';


const Iot = React.createClass({
	render(){
		return(
			<div>
        <SearchByName/>  
        <Link to="/passion"><img style={backgroundImg}  src="http://i.imgur.com/wa8gPNR.png" /></Link>

	</div>
			)
	}
})


var title = {
  marginTop: "-480px",
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "45px",
  color: "#32ff04",
  textTransform: "uppercase",
  backgroundColor: "rgba(0, 0, 0, 0.22)",
}
var title2 = {
  fontWeight: "900",
  fontFamily: "Roboto", 
  fontSize: "40px",
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



export default Iot;