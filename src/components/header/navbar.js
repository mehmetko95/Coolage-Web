import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import { Navbar, Nav } from 'react-bootstrap';

 export default class NavBar extends React.Component  {

render(){
  
    return (
      <Navbar collapseOnSelect expand="lg"  fixed="top"  className=" d-flex align-items-center" id="header">
       <div className="container d-flex align-items-center">
      <NavLink to ="/"><Navbar.Brand ><img src={logo} className="logo img-fluid" alt="logo"/></Navbar.Brand></NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" >
      <i class="icofont-navigation-menu" style={{color:"white"}}></i>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link > <NavLink exact to ="/" activeStyle={{fontWeight:"600"}} style={{color:"white"}}> Home </NavLink></Nav.Link>
        <Nav.Link > <NavLink exact to ="/intern" activeStyle={{fontWeight:"600"}} style={{color:"white"}}> Internships </NavLink></Nav.Link>
       <Nav.Link > <NavLink to ="/be-a-ceo" activeStyle={{fontWeight:"600"}} style={{color:"white"}}> Be a CEO </NavLink></Nav.Link>
       <Nav.Link > <NavLink to ="/invite" activeStyle={{fontWeight:"600"}} style={{color:"white"}} className="btn-navbar"> Request Invite </NavLink></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </div>
    </Navbar>
    )
  }

 }
 

