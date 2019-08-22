import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { get as getCookie, remove as removeCookie } from "es-cookie";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

class AppNavbar extends Component {
  logout(e) {
    e.preventDefault();
    removeCookie("usertoken");
    this.props.history.push("/");
  }

  getNavbar() {
    if (getCookie("usertoken") === "1") {
      // ADMIN
      return (
        <Nav className="mr-auto">
          <Nav.Link href="/" className="nav-link">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link href="/dashboard" className="nav-link">
            <h5>Dashboard</h5>
          </Nav.Link>
          <Nav.Link href="/ac" className="nav-link">
            <h5>AC Control</h5>
          </Nav.Link>
          <Nav.Link href="/form" className="nav-link">
            <h5>Form</h5>
          </Nav.Link>
          <Nav.Link href="/meetingscheduler" className="nav-link">
            <h5>Meeting Scheduler</h5>
          </Nav.Link>
          <li className="nav -item">
            <li onClick={this.logout.bind(this)} className="nav-link">
              <h5>Logout</h5>
            </li>
          </li>
        </Nav>
      );
    } else if (getCookie("usertoken") === "2") {
      // USER
      return (
        <Nav className="mr-auto">
          <Nav.Link href="/" className="nav-link">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link href="/dashboard" className="nav-link">
            <h5>Dashboard</h5>
          </Nav.Link>

          <Nav.Link href="/form" className="nav-link">
            <h5>Form</h5>
          </Nav.Link>
          <Nav.Link href="/meetingscheduler" className="nav-link">
            <h5>Meeting Scheduler</h5>
          </Nav.Link>
          <li className="nav -item">
            <li onClick={this.logout.bind(this)} className="nav-link">
              <h5>Logout</h5>
            </li>
          </li>
        </Nav>
      );
    } else {
      return (
        <Nav className="mr-auto">
          <Nav.Link href="/" className="nav-link">
            <h5>Home</h5>
          </Nav.Link>
          <Nav.Link href="/login" className="nav-link">
            <h5>Login</h5>
          </Nav.Link>
        </Nav>
      );
    }
  }

  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ backgroundColor: "#212529" }}
        variant="dark"
      >
        <Navbar.Brand href="/home">
          {" "}
          <img height={50} src="/assets/Logo-Astair-w-1.png" alt={"logo"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.getNavbar()}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(AppNavbar);