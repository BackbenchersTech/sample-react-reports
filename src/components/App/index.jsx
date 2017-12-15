import React, { Component } from 'react'; 
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch, Route, Link } from 'react-router-dom'; 
import BootstrapTable from 'reactjs-bootstrap-table';
import { Sidebar, SidebarItem } from 'react-responsive-sidebar';

import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password : ''};

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({name: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var email = this.state.name;
    var pass = this.state.password;
    console.log('A name was submitted: ' + email);
    console.log('A password was submitted: ' + pass);
    var Credentials = [];
    Credentials.push(email);
    Credentials.push(pass);
    console.log(Credentials);

    if(  email == "admin"
       && pass == "admin" )
    {
        console.log( "validation succeeded" );
             renderTable();
    }
    else
    {
       console.log( "validation failed" );

    }

   //  axios.post('/user', {
   //  emailId : 'email',
   //  passwordd : 'pass'
   //  })
   //  .then(function (response) {
   //    console.log(response);
   //  })
   //  .catch(function (error) {
   //    console.log(error);
   // });
  }

   render() {
      return (
        <div className = "Page">
        <div className = "loginHeader ">
           <h3 className = "mainHeading text-center">Sample React Application</h3> 
        </div>
      <div className = "formPage-wrapper">

      <div className = "form-wrapper">
        <div className="form-header">
        <h2 className="form-heading">Login</h2>
        </div>
              <form className = "form1" onSubmit={this.handleSubmit}>
 
        <div className="field-wrapper" >
          <input className="field-input" type="text" id="name"  placeholder="UserName" value={this.state.name} onChange={this.handleEmailChange}  />
          <label className="field-label" htmlFor="username" >Username</label>
        </div>
       
        <div className="field-wrapper" >
          <input className="field-input" type="password" id="password"  placeholder="........" value={this.state.password} onChange={this.handlePasswordChange}  />
          <label className="field-label" htmlFor="password" >Password</label>
        </div>

        <div className="submit-btn-wrapper">
          <button className="submit-btn" type="submit" onClick= { renderForm }>Login</button>
        </div>

      </form> 
         </div> 
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
              
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/Login' component={Login} />
               </Switch>
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

class Login extends Component {
   render() {
      return (
         <div className = "sideContent">
            <h2>Login</h2>
         </div>
      );
   }
}
function renderForm() {
  ReactDOM.render(<App />, document.getElementById('app'));
}

function renderTable() {
  ReactDOM.render(<Validate />, document.getElementById('app'));
}
export default App;