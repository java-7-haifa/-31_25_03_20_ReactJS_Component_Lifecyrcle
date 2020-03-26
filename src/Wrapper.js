import React from "react";
import { Route } from "react-router-dom";
import List from "./List";
import View from './View';

export default props => {
  return (
    <>
      <List remove={props.remove} contacts={props.contacts} />
      <Route
        path="/contacts/:id"
        component={View}
      />
    </>
  );
};
