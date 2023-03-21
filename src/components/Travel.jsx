import React from "react";
import "./Travel.css";

export default function Travel(props) {
  return (
    <section className="travel--card_section">
      <img
        src={props.imageUrl}
        className="travel--card_img"
        alt="travel--card_img"
      />
      <div className="travel--card_details">
        <div className="location">
          <img
            src="../src/assets/map.png"
            className="map--icon"
            alt="map-icon"
          />
          <span className="travel--card_location">{props.location}</span>
          <a href={props.googleMapsUrl} className="travel--card_view">
            View on Google Maps
          </a>
        </div>
        <h2 className="travel--card_title">{props.title}</h2>
        <p className="travel--card_date">
          {props.startDate} - {props.endDate}
        </p>
        <p className="travel--card_desc">{props.description}</p>
      </div>
    </section>
  );
}
