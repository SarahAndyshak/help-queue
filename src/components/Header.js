import React from "react";
// import ticketsImage from "./../img/tickets.png";
import ticketsImage2 from "./../img/tickets2.jpg";

function Header(){
  return (
    <React.Fragment>
      <h1>Help Queue</h1>
      {/* <img src={ticketsImage} alt="An image of tickets" /> */}
      <img src={ticketsImage2} alt="An image of tickets" />
    </React.Fragment>
  );
}

export default Header;