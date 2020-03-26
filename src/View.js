import React from "react";
import { withRouter } from "react-router-dom";

const View = (props) => {
  function showContact(id) {
    let contact = findById(id);
    if (contact) {
      return (
        <>
          <p>{contact.id}</p>
          <p>{contact.name}</p>
          <p>{contact.phone}</p>
        </>
      );
    }
    return <h2>Contact not faund</h2>
  }
return <div className="contact-view">{showContact(props.match.params.id * 1)}</div>;
};

export default withRouter(View);

function findById(id) {
  let json = localStorage.getItem("contacts");
  let arr = JSON.parse(json);
  let contact = arr.find(c => c.id === id);
  return contact;
}
