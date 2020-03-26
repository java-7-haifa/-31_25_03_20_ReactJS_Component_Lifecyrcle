import React from "react";
import { withRouter } from "react-router-dom";

const List = props => {
  return (
    <ul className="contact-list">
      {props.contacts.map(c => {
        return (
          <li key={c.id}>
            <span onClick={() => props.history.push(`/contacts/${c.id}`)}>
              {c.name}
            </span>{" "}
            <button onClick={() => props.remove(c.id)} >
              remove
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default withRouter(List);
