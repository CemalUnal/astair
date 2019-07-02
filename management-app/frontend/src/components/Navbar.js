import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
class Navbar extends Component{

    logout(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')

    }

    render(){
        //style={{position: 'fixed', width :'100%', z-index:'1', top :'0'}}
        const loginRegLink =(
            <ul className ="navbar-nav">
                <li className = "nav -item">
                    <Link to= "/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        )

        const userLink =(
            <ul className ="navbar-nav">
                <li className = "nav -item">
                    <Link to= "/profile" className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li className = "nav -item">
                    <Link to= "/monitor" className="nav-link">
                        Monitor
                    </Link>
                </li>
                <li className = "nav -item">
                    <a  href ="" onClick={this.logout.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </ul>
        )

        return(
            <nav className="navbar-dark navbar-expand-lg navbar-success bg-dark rounded " >
                <button className= "navbar-toggler"
                type= "button"
                data-toggle="collapse"
                data-target = "navbar1"
                aria-controls="navbar1"
                aria-label="Toggle navigation">
                <span className ="navbar-toggle-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse justify-content-md-center"
                id="navbar1">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to= "/"  className ="nav-link">
                                Home
                            </Link>

                        </li>
                    </ul>
                    {localStorage.usertoken ? userLink : loginRegLink}

                </div>
            </nav>

        )
    }
}

export default withRouter(Navbar)