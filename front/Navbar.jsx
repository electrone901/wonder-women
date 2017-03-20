import React from 'react';
import {Link} from 'react-router';
// import './Navbar.css';
// import styles from './style.css';
// import './style/footer.css'


{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  render: function() {
    return (
    <div>
      { /*<nav className="navbar main">*/}
      <nav >
          <div >
            <a href="/" className="logoWidth">
             <img src= "http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />
            </a>
          </div>
      </nav>

      { /*SECOND NAV*/}
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          { /*Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className="linetext"><Link to="/">Home</Link></li>
              <li className="linetext"><Link to="/people">Get People List</Link></li>
              <li className="linetext"><Link to="/add-new-person">Add A New Person</Link></li>
 
            </ul>




          </div>{ /*/.navbar-collapse */}
        </div>{ /*/.container-fluid */}
      </nav>

    </div>
    )
  }
})


export default Navbar;
