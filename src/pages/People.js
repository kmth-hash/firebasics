import React from "react";
import Card from "./Card";
import "../stylesheets/Styles.css";

const peopleJson = [{
    name : "Sam Baker" , 
    letter : "SB" ,
    present : true
} , {
    name : "Billu Barber" , 
    letter : "BB" ,
    present : true
} , {
    name : "Jack Black" , 
    letter : "JB" ,
    present : false
} ,
{
    name : "Sam Baker" , 
    letter : "SB" ,
    present : true
} , {
    name : "Billu Barber" , 
    letter : "BB" ,
    present : true
} , {
    name : "Jack Black" , 
    letter : "JB" ,
    present : false
},
{
    name : "Sam Baker" , 
    letter : "SB" ,
    present : true
} , {
    name : "Billu Barber" , 
    letter : "BB" ,
    present : true
} , {
    name : "Jack Black" , 
    letter : "JB" ,
    present : false
}];


export default function People() {
    console.log(peopleJson);
  return (
    <div className="bg-white ">
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row">
            <div className="col-sm-6">
              <div className="list list-row block">
                {peopleJson.map((item )=> {
                   return(
                       <Card item={item} key={item.name[0]}/>
                   );
                } )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
