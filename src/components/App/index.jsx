import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'; 
import BootstrapTable from 'reactjs-bootstrap-table';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

import history from '../../history';

import './style.css';

history.push('/home');

class App extends React.Component {

  render() {
    return (
      <div className = "Page">
      <div className = "loginHeader ">
          <h3 className = "mainHeading text-center">Sample React Application</h3> 
      </div>
    <div className = "formPage-wrapper">

    
        </div>
        </div>

    );
  }
}

function Validate()
{
    
  console.log( "validation succeeded" );
       
  let columns = [
  { name: 'firstName', display: 'First Name' },
  { name: 'lastName', display: 'Last Name' },
  { name: 'address', display: 'Address' }
]
var data = [
         { 'id': 1, firstName: 'Ammu', lastName: 'Reddy', address: 'Novi'},
         { id: 2, firstName: 'Berry', lastName: 'Reddy', address: 'Novi'}
      ]  

    return ( 
      <div >
        <div className = "loginHeader ">
           <h3 className = "mainHeading text-center">Sample React Application</h3> 
        </div>
        <div className= "SidebarClass col-sm-10 ">
        <Router>
            <div>
               <ul className = "sideList">
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/Login'}>Login</Link></li>
               </ul>
            </div>
         </Router>
         </div>
         
    </div>
      );   
      
      console.log("msg")  
    }

class Home extends Component {
   render() {
      return (
         <div className = "sideContent">
            <h2>Welcome ,
            <br/>
            <br/>
            Choose a Report to Display</h2>
         </div>
      );
   }
}

function renderTable() {
  ReactDOM.render(<Validate />, document.getElementById('app'));
}
export default App;