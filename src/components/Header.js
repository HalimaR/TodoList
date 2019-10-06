import React from "react";
import "../App.css";
function Header() {
  const date = new Date();
  const uur = date.getHours();
  let timeOFDay;
  
  if(uur < 12){
    timeOFDay = "ohajo";
  }else if (uur >= 12 && uur < 17){
    timeOFDay="konichiwa";
  }else if ( uur > 17 && uur <20){
    timeOFDay="konbawa"
  }else{
    timeOFDay="ojasuminasai"
  }

    return (
      <div>
        <header className="navbar">{timeOFDay}</header>
      </div>
    );
}
export default Header;
