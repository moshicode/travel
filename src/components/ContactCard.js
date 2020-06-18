import React, { useState } from "react";
import contactImg from "../assets/123.jpg";

function ContactCard(props) {
  const {
    job,
    fullName,
    id,
    company,
    country,
    phone,
    location,
  } = props.contact;

  return (
    <div className="col-md-4">
      <div className=" panel">
        <div className="panel-body contact-card">
          <div className="contact-profile">
            <img
              className="contact-img img-circle"
              src={contactImg}
              alt={fullName}
            />
            <p>
              <strong>{job}</strong>
            </p>
          </div>
          <div className="contact-info">
            <h4>{fullName}</h4>
            <p>{company}</p>
            <p>{phone}</p>
            <p>{country}</p>
            <p>{location ? location.lat : "NO DATA"}</p>
            <p>{location ? location.long : "NO DATA"}</p>
          </div>
          <div className="contact-ctrl">
            <i
              onClick={() => props.removeContact(id)}
              className="fa fa-trash"
              aria-hidden="true"
            ></i>

            <i
              onClick={() => props.removeContact(id)}
              className="fa fa-pen"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactCard;
