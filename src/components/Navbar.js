import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/LogoWillItCereal.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar "
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              style={{ color: "white" }}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item navbar-item-links" to="/about">
                About
              </Link>

              <Link className="navbar-item navbar-item-links" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item navbar-item-links" to="/contact">
                Contact
              </Link>

            </div>

          </div>
        </div>
        <div className="wave">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 135.6" enable-background="new 0 0 1920 135.6" >
            <path fill="#2b2523" d="M-0.1,0l0,134c0,0,32.3,11.4,101.7-27.5c84.1-47.1,134.6-43.9,243.3,2.6c143.2,61.2,326-39.1,547.4-79.4 C1297.7-44.1,1686,112.7,1920,10V0H-0.1z"></path>
          </svg>
        </div>
      </nav>
    )
  }
}

export default Navbar
