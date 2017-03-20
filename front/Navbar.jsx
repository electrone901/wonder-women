import React from 'react';
import {Link} from 'react-router';


{/*NAVIGATION BAR*/}
var Navbar = React.createClass({
  render: function() {
    return (
    <div>
      <nav >
        <div >
          <a href="/" className="logoWidth">
           <img  src="http://www.freeindex.co.uk/aspjpeg/showimage.asp?img=logo.jpg&folder=listingpics/692/506/&maxW=230&maxH=80" />
          </a>
        </div>
      </nav>


      <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="linetext"><Link to="/">Home</Link></li>
                <li className="linetext"><Link to="/people">Get People List</Link></li>
                <li className="linetext"><Link to="/add-new-person">Add A New Person</Link></li>
                <li className="linetext"><Link to="/search-by-id">Get A Person By Id</Link></li>
                <li className="linetext"><Link to="/search-by-name">Search By Name</Link></li>
              </ul>
            </div>
        </div>
      </nav>
    </div>
    )
  }
})


export default Navbar;
