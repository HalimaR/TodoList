import React from "react";

function ContactCard(props){
    
    return (
      <div className="todo-item">
        <input type="checkbox" 
        checked={props.bekeken} 
        onChange={()=>props.handleChange(props.id)} />
        <h3 style={{ color: !props.anime && "#888888" }}>{props.anime}</h3>
        {/*<img src={props.imgUrl} width="200" height="220"></img>
        <p>{props.heroes} </p>
        <p>{props.story}</p>*/}

        <br />
      </div>
    );
}
export default ContactCard;