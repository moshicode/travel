import React, { useState } from "react";

function Contact(props) {
  const { fName, job, id, address } = props.contact;
  return (
    <div className="col-md-6">
      <div className="contact panel panel-default">
        <div className="panel-body contact-panel">
          <div className="row">
            <div className="col-xs-5">
              <div className="contact-img">
                <img
                  className="img-circle img-responsive profile-img"
                  src="/Assets/1.jpg"
                  alt="Logo"
                />
              </div>
              <p>{job}</p>
            </div>
            <div className="col-xs-7">
              <div className="contact-info">
                <p>{fName}</p>
                <div className="address">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  <span>{address}</span>
                </div>
              </div>
            </div>
            <div className="ctrl">
              <i
                className="fa fa-trash"
                aria-hidden="true"
                onClick={() => props.removeContact(id)}
              ></i>
              <i className="fa fa-pen" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
