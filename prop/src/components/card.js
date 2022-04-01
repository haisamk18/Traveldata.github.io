import React from "react";
import data from "../data";
import "./card.css";

export default function Card(props) {
    return (
        <div className="card">
            <div className="card-imgcontainer"><img className="mainimg" src={props.img} /></div>

            <div className="card-content">
                <p><img  src="https://png.pngtree.com/element_our/sm/20180515/sm_5afb0cf7bd445.jpg" className="lcimg"></img><span><b>{props.location}</b></span><a href={props.maplink}>Go to Google Maps</a></p>
                <h1>{props.heading}</h1>

                <h3>{props.start} - {props.end}</h3>
                <p>{props.desc}</p>

            </div>

        </div>
    )

}