import React from "react";
import "../stylesheets/Styles.css";

function Card({ item }) {
  return (
    <div>
      <div className="list-item ">
        <div>
          <a href="#" data-abc="true">
            <span className="w-48 avatar gd-warning">{item.letter}</span>
          </a>
        </div>
        <div className="flex">
          {" "}
          <a href="#" className="item-author text-color" data-abc="true">
            {item.name}
          </a>
          <div className="item-except text-muted text-sm h-1x">Blah blah</div>
        </div>
        <div className="no-wrap">
          <div className="item-date text-muted text-sm d-none d-md-block">
            Nope
          </div>
        </div>
        <div className="">
          
        </div>
      </div>
    </div>
  );
}

export default Card;
