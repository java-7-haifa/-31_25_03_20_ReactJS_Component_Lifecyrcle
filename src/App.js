import React from "react";
import { Switch, Route } from "react-router-dom";
import Wrapper from "./Wrapper";
import {withRouter} from 'react-router-dom';

class App extends React.Component {
  state = {
    contacts:getAllContacts()
  }

  constructor(props){
    super(props);
    console.log(props);
  }

  removeContact = id => {
      if(removeContact(id)){
        if(this.props.location.pathname.endsWith(`/contacts/${id}`)){
          this.props.history.push('/contacts');
        }
        this.setState({contacts:getAllContacts()});
      }
  }

  render() {
    return (
      <div className="container">
        <Switch>
          <Route path='/contacts' render={()=><Wrapper remove={this.removeContact} contacts={this.state.contacts}/>} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);

function getAllContacts(){
  let json = localStorage.getItem('contacts');
  return JSON.parse(json);
}

function removeContact(id){
  let json = localStorage.getItem('contacts');
  let arr = JSON.parse(json);
  let indx = arr.findIndex(c => c.id === id);
  if(indx >= 0){
    arr.splice(indx,1);
    localStorage.setItem('contacts',JSON.stringify(arr));
    return true;
  }
  return false;
}
